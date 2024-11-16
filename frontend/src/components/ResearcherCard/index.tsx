import { IResearcherCard } from "../../types";
import ProfilePicPlaceholder from "../../assets/profile-pic-placeholder.jpg";
import LattesLogo from "../../assets/lattes-logo.svg";
import { useState } from "react";
import { formatImageUrl } from "../../utils";
import { NavLink } from "react-router-dom";

export default function ResearcherCard({
  id,
  name,
  resume_text,
  profile_pic,
}: IResearcherCard) {
  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text: string | undefined, maxLength: number) => {
    if (!text) return ""; // Return empty string if text is falsy
    if (text.length <= maxLength) return text;
    const truncatedText = text.slice(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    const lastPeriodIndex = truncatedText.lastIndexOf(".");
    const index = Math.max(lastSpaceIndex, lastPeriodIndex);
    return index > 0
      ? truncatedText.slice(0, index) + "..."
      : truncatedText + "...";
  };

  return (
    <div className="w-full">
      <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        <div
          className="relative overflow-hidden w-full h-72 sm:h-80 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={
              profile_pic ? formatImageUrl(profile_pic) : ProfilePicPlaceholder
            }
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg transition duration-300 ease-in-out transform hover:scale-105"
            alt={name}
          />
          {isHovered && id && (
            <NavLink to={`/researchers/${id}`}>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 text-black text-xl font-semibold">
                See More
              </div>
            </NavLink>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between h-52">
          <div>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-gray-700 text-sm overflow-hidden">
              {truncateText(resume_text, 130)}
            </p>
          </div>
          {id && (
            <a
              href={`http://lattes.cnpq.br/${id}`}
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-gray-700">
                <img
                  src={LattesLogo}
                  alt="Lattes Logo"
                  className="w-8 h-8 mr-1"
                />
                Currículo Lattes
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
