import { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { IResearcherCard } from "../../types";
import ResearcherCard from "../../components/ResearcherCard";
import Spinner from "../../components/Spinner";

export default function Researchers() {
  const [page, setPage] = useState(1);
  const [stopRefetch, setStopRefetch] = useState(false);
  const [allResearcherCards, setAllResearcherCards] = useState<
    Array<IResearcherCard>
  >([]);

  const { data, isLoading, isError, refetch } = useQuery<
    Array<IResearcherCard>
  >({
    queryKey: [`get-researchers/${page}`, "GET"],
    retry: false,
  });

  const observerRef = useRef(null);

  useEffect(() => {
    if (data) {
      setAllResearcherCards((prevCards) => [...prevCards, ...data]);
      if (data.length < 6) {
        setStopRefetch(true);
      }
    }
  }, [data]);

  useEffect(() => {
    if (stopRefetch) return;
    refetch();
  }, [page, refetch]);

  useEffect(() => {
    if (!isLoading && !isError && observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !isLoading && !isError) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(observerRef.current);

      return () => observer.disconnect();
    }
  }, [isLoading, isError]);

  const content =
    allResearcherCards &&
    allResearcherCards.map((researcher) => (
      <ResearcherCard key={researcher.name} {...researcher} />
    ));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate sm:mb-8 mb-14 flex-grow">
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-90 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80 opacity-40"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Researchers
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto gap-y-12 px-12 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {content}
            </div>
            {isLoading && !isError && !stopRefetch && <Spinner />}
          </div>
        </div>
        <div ref={observerRef} />
      </main>
      <Footer />
    </div>
  );
}
