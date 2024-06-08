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
  const [showAllPublications, setShowAllPublications] = useState(false);

  const handleShowMore = () => {
    setPublicationsToShow(publicationsToShow + 6);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate flex-grow">
        <div className="relative pt-14">
          <div className="py-4 sm:py-8 text-center">
            <h1 className="lg:text-4xl text-2xl font-bold tracking-tight text-gray-900">
              Publications
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto gap-t-12 px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {!isLoading &&
                data &&
                data.slice(0, showAllPublications ? data.length : publicationsToShow).map((journal_article, index) => (
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
            {data && data.length > publicationsToShow && !showAllPublications && (
              <div className="mt-6 text-center">
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
