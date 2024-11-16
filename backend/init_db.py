from utils import save_researchers_to_json, save_journal_articles_to_json
import sqlite3
import json

save_researchers_to_json()
save_journal_articles_to_json()

with open("data/researchers.json", "r", encoding="utf-8") as json_file:
    researchers = json.load(json_file)

with open("data/journal_articles.json", "r", encoding="utf-8") as json_file:
    journal_articles = json.load(json_file)

connection = sqlite3.connect("inct-iaia.db")

with open("schema.sql", "r") as f:
    connection.executescript(f.read())

cur = connection.cursor()

for researcher in researchers:
    cur.execute(
        """
        INSERT INTO researchers (id, name, resume_text, profile_pic)
        VALUES (?, ?, ?, ?)
        """,
        (
            researcher["id"],
            researcher["name"],
            researcher["resume_text"],
            researcher["profile_pic"],
        ),
    )

for article in journal_articles:
    cur.execute(
        """
        INSERT INTO journal_articles (
            researcher_id, production_sequence, importance_order, nature, title, year, country, language,
            dissemination_medium, home_page, relevance_flag, doi, english_title,
            scientific_dissemination_flag, journal, issn, volume, issue, series,
            start_page, end_page, publication_location, authors
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            article["researcher_id"],
            article.get("production_sequence", None),
            article.get("importance_order", None),
            article["nature"],
            article["title"],
            article.get("year"),
            article.get("country", None),
            article.get("language", None),
            article.get("dissemination_medium", None),
            article.get("home_page", None),
            article.get("relevance_flag", None),
            article.get("doi", None),
            article.get("english_title", None),
            article.get("scientific_dissemination_flag", None),
            article.get("journal", None),
            article.get("issn", None),
            article.get("volume", None),
            article.get("issue", None),
            article.get("series", None),
            article.get("start_page", None),
            article.get("end_page", None),
            article.get("publication_location", None),
            ", ".join(article.get("authors", [])),
        ),
    )


connection.commit()
connection.close()

print("Researchers data successfully inserted into the database.")
