from flask import Flask, request
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
cors = CORS(app)


def get_db_connection():
    conn = sqlite3.connect("inct-iaia.db")
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/get-researcher/<string:id>", methods=["GET"])
def get_researcher(id):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute(
        """
        SELECT id, name, resume_text, profile_pic
        FROM researchers
        WHERE id = ?
        """,
        (id,),
    )

    researcher_row = cur.fetchone()
    if not researcher_row:
        conn.close()
        return json.dumps({"error": "Researcher not found."}), 404
    
    researcher = {
        "id": researcher_row["id"],
        "name": researcher_row["name"],
        "resume_text": researcher_row["resume_text"],
        "profile_pic": researcher_row["profile_pic"],
    }

    cur.execute(
        """
        SELECT ja.production_sequence, ja.importance_order, ja.nature, ja.title, ja.year, ja.country, 
               ja.language, ja.dissemination_medium, ja.home_page, ja.relevance_flag, ja.doi, 
               ja.english_title, ja.scientific_dissemination_flag, ja.journal, ja.issn, ja.volume, 
               ja.issue, ja.series, ja.start_page, ja.end_page, ja.publication_location, ja.authors
        FROM journal_articles ja
        WHERE ja.researcher_id = ?
        ORDER BY ja.year DESC
        """,
        (id,),
    )

    journal_articles_rows = cur.fetchall()

    researcher["journal_articles"] = [
        {
            "production_sequence": row["production_sequence"],
            "importance_order": row["importance_order"],
            "nature": row["nature"],
            "title": row["title"],
            "year": row["year"],
            "country": row["country"],
            "language": row["language"],
            "dissemination_medium": row["dissemination_medium"],
            "home_page": row["home_page"],
            "relevance_flag": row["relevance_flag"],
            "doi": row["doi"],
            "english_title": row["english_title"],
            "scientific_dissemination_flag": row["scientific_dissemination_flag"],
            "journal": row["journal"],
            "issn": row["issn"],
            "volume": row["volume"],
            "issue": row["issue"],
            "series": row["series"],
            "start_page": row["start_page"],
            "end_page": row["end_page"],
            "publication_location": row["publication_location"],
            "authors": row["authors"],
        }
        for row in journal_articles_rows
    ]

    conn.close()

    response_body = json.dumps(researcher, ensure_ascii=False).encode("ISO-8859-1")
    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}

@app.route("/get-researchers/<int:page>", methods=["GET"])
def get_researchers(page):
    conn = get_db_connection()
    cur = conn.cursor()

    page_size = 8
    offset = (page - 1) * page_size

    cur.execute(
        """
        SELECT id, name, resume_text, profile_pic 
        FROM researchers 
        ORDER BY name 
        LIMIT ? OFFSET ?
        """,
        (page_size, offset),
    )

    rows = cur.fetchall()

    if not rows:
        conn.close()
        return json.dumps({"error": "No researchers found."}), 404
    
    researchers = [
        {
            "id": row["id"],
            "name": row["name"],
            "resume_text": row["resume_text"],
            "profile_pic": row["profile_pic"],
        }
        for row in rows
    ]

    conn.close()

    response_body = json.dumps(researchers, ensure_ascii=False).encode("ISO-8859-1")
    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


@app.route("/get-journal-articles", methods=["GET"])
def get_all_journal_articles_endpoint():
    page = request.args.get("page", default=1, type=int)
    conn = get_db_connection()
    cur = conn.cursor()

    page_size = 12
    offset = (page - 1) * page_size

    cur.execute(
        """
        SELECT production_sequence, importance_order, nature, title, year, country, language, 
               dissemination_medium, home_page, relevance_flag, doi, english_title, scientific_dissemination_flag, 
               journal, issn, volume, issue, series, start_page, end_page, publication_location, authors
        FROM journal_articles
        ORDER BY year DESC
        LIMIT ? OFFSET ?
        """,
        (page_size, offset),
    )

    rows = cur.fetchall()

    if not rows:
        conn.close()
        return json.dumps({"error": "No journal articles found."}), 404

    journal_articles = [
        {
            "production_sequence": row["production_sequence"],
            "importance_order": row["importance_order"],
            "nature": row["nature"],
            "title": row["title"],
            "year": row["year"],
            "country": row["country"],
            "language": row["language"],
            "dissemination_medium": row["dissemination_medium"],
            "home_page": row["home_page"],
            "relevance_flag": row["relevance_flag"],
            "doi": row["doi"],
            "english_title": row["english_title"],
            "scientific_dissemination_flag": row["scientific_dissemination_flag"],
            "journal": row["journal"],
            "issn": row["issn"],
            "volume": row["volume"],
            "issue": row["issue"],
            "series": row["series"],
            "start_page": row["start_page"],
            "end_page": row["end_page"],
            "publication_location": row["publication_location"],
            "authors": row["authors"],
        }
        for row in rows
    ]

    conn.close()

    response_body = json.dumps(journal_articles, ensure_ascii=False).encode(
        "ISO-8859-1"
    )
    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


if __name__ == "__main__":
    app.run(debug=True)
