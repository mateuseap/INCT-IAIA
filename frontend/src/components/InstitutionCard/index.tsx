import { IInstitutionCard } from "../../types";

export default function InstitutionCard({
  name,
  logoUrl,
  website,
}: IInstitutionCard) {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
      onClick={() => window.open(website, "_blank")}
    >
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="w-36 h-36 object-contain mb-4"
      />
      <h3 className="text-lg font-medium text-gray-700 text-center transition-colors hover:text-gray-900">
        {name}
      </h3>
    </div>
  );
}
