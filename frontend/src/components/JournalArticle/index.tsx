import { IJournalArticle } from "../../types";

export default function JournalArticle({
  title,
  authors,
  journal,
  year,
  doi,
}: IJournalArticle) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 mt-1">
        <strong>Authors:</strong> {authors.join(", ")}
      </p>
      {journal && (
        <p className="text-gray-600">
          <strong>Journal:</strong> {journal}
        </p>
      )}
      {year && (
        <p className="text-gray-600">
          <strong>Year:</strong> {year}
        </p>
      )}
      {doi && (
        <p className="text-gray-600">
          <strong>DOI:</strong> {doi}
        </p>
      )}
    </div>
  );
}
