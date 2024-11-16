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
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<IResearcherDetails>({
    queryKey: [`get-researcher/${id}`, "GET"],
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
      <main className="my-16 isolate flex-grow">
        <div className="relative pt-14">
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
                <div className="flex flex-col items-center mx-auto px-8 pt-4 sm:pt-8 justify-center">
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
                            alt={data.name}
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
                          alt={data.name}
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
