import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";
import { IJournalArticle } from "../../types";
import { useEffect, useRef, useState } from "react";
import JournalArticle from "../../components/JournalArticle";

export default function Publications() {
  const [page, setPage] = useState(1);
  const [stopRefetch, setStopRefetch] = useState(false);
  const [allJournalArticles, setAllJournalArticles] = useState<
    Array<IJournalArticle>
  >([]);

  const { data, isLoading, isError, refetch } = useQuery<
    Array<IJournalArticle>
  >({
    queryKey: [`get-all-journal-articles?page=${page}`, "GET"],
    retry: false,
  });

  const observerRef = useRef(null);

  useEffect(() => {
    if (data) {
      setAllJournalArticles((prevJournalArticles) => [
        ...prevJournalArticles,
        ...data,
      ]);
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
    allJournalArticles &&
    allJournalArticles.map((journal_article) => (
      <JournalArticle key={journal_article.title} {...journal_article} />
    ));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="my-16 isolate sm:mb-8 flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Publications
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
