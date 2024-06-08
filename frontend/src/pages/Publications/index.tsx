import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";
import { IJournalArticle } from "../../types";
import { useState } from "react";

export default function Publications() {
  const { data, isLoading } = useQuery<Array<IJournalArticle>>({
    queryKey: ["get-all-journal-articles", "GET"],
    retry: false,
  });

  const [publicationsToShow, setPublicationsToShow] = useState(6);

  const handleShowMore = () => {
    setPublicationsToShow(publicationsToShow + 6);
  };

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
              Publications
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto gap-y-12 px-12 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {!isLoading &&
                data &&
                data.slice(0, publicationsToShow).map((journal_article, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {journal_article.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <strong>Authors:</strong>{" "}
                      {journal_article.authors.join(", ")}
                    </p>
                    {journal_article.journal && (
                      <p className="text-gray-600">
                        <strong>Journal:</strong>{" "}
                        {journal_article.journal}
                      </p>
                    )}
                    {journal_article.year && (
                      <p className="text-gray-600">
                        <strong>Year:</strong> {journal_article.year}
                      </p>
                    )}
                    {journal_article.doi && (
                      <p className="text-gray-600">
                        <strong>DOI:</strong> {journal_article.doi}
                      </p>
                    )}
                  </div>
                ))}
            </div>
            {data && data.length > publicationsToShow && (
              <div className="mt-3 text-center">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleShowMore}
                >
                  See More
                </button>
              </div>
            )}
            {isLoading && <Spinner />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
