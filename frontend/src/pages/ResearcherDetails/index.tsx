import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { IResearcherDetails } from "../../types";
import Spinner from "../../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { formatImageUrl } from "../../utils";
import ProfilePicPlaceholder from "../../assets/profile-pic-placeholder.jpg";
import { useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import JournalArticle from "../../components/JournalArticle";

export default function ResearcherDetails() {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery<IResearcherDetails>({
    queryKey: [`get-researcher/${name}`, "GET"],
    retry: false,
  });

  const [publicationsToShow, setPublicationsToShow] = useState(3);
  const [isJournalArticlesOpen, setIsJournalArticlesOpen] = useState(true);

  const handleShowMore = () => {
    if (data && publicationsToShow < data.journal_articles.length) {
      setPublicationsToShow(publicationsToShow + 3);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="isolate flex-grow">
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
          <div className="mx-auto pt-4 px-8 sm:px-16">
            <a
              key={data?.name}
              href="/researchers"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <ArrowUturnLeftIcon className="h-6 w-6" />
              <span className="ml-2 text-sm">Back to Researchers</span>
            </a>
          </div>
          {isLoading ? (
            <div className="mt-24">
              <Spinner />
            </div>
          ) : (
            data && (
              <>
                <div className="flex flex-col items-center mx-auto px-4 py-4 sm:py-8 sm:px-8 mb-12 justify-center">
                  {data.resume_text ? (
                    <div className="w-full justify-center items-center flex flex-col sm:flex-row sm:items-start gap-8 max-w-6xl">
                      <div className="flex-shrink-0">
                        <div className="w-80 h-80 relative rounded-lg overflow-hidden shadow-md bg-gray-200">
                          <img
                            className="absolute inset-0 w-full h-full object-cover"
                            src={
                              data.profile_pic
                                ? formatImageUrl(data.profile_pic)
                                : ProfilePicPlaceholder
                            }
                            alt={name}
                          />
                        </div>
                        <h1 className="text-xl font-semibold tracking-tight text-gray-900 mt-4 text-center w-80">
                          {data.name}
                        </h1>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                          Resume
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700">
                          {data.resume_text}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-80 h-80 relative rounded-lg overflow-hidden shadow-md bg-gray-200">
                        <img
                          className="absolute inset-0 w-full h-full object-cover"
                          src={
                            data.profile_pic
                              ? formatImageUrl(data.profile_pic)
                              : ProfilePicPlaceholder
                          }
                          alt={name}
                        />
                      </div>
                      <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mt-4 text-center w-80">
                        {data.name}
                      </h1>
                    </div>
                  )}
                  {data.journal_articles &&
                    data.journal_articles.length > 0 && (
                      <div className="w-full max-w-6xl mt-12">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                          Publications
                        </h2>
                        <div className="ml-2 sm:ml-6">
                          <h3
                            className="text-xl font-bold tracking-tight text-gray-900 mb-6 cursor-pointer"
                            onClick={() =>
                              setIsJournalArticlesOpen(!isJournalArticlesOpen)
                            }
                          >
                            Journal Articles
                            <span className="ml-2 text-base">
                              {isJournalArticlesOpen ? "▼" : "►"}
                            </span>
                          </h3>
                          {isJournalArticlesOpen && (
                            <>
                              <div className="flex flex-col justify-center gap-y-6">
                                {data.journal_articles
                                  .slice(0, publicationsToShow)
                                  .map((journal_article) => (
                                    <JournalArticle key={journal_article.title} {...journal_article} />
                                  ))}
                              </div>
                              {data.journal_articles.length >
                                publicationsToShow && (
                                <div className="mt-6 text-center">
                                  <button
                                    className="text-blue-500 hover:underline"
                                    onClick={handleShowMore}
                                  >
                                    See More
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
