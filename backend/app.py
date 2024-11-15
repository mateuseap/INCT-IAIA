from flask import Flask, request
from flask_cors import CORS
from utils import (
    get_all_xml_files,
    get_one_xml_file,
    get_all_journal_articles,
    parse_researcher_xml,
    parse_researcher_name,
)
import json


app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/get-researchers/<int:page>", methods=["GET"])
def get_researchers(page):
    all_xml_files = get_all_xml_files("data/researchers")
    selected_xml_files = all_xml_files[(page - 1) * 8 : page * 8]

    if not selected_xml_files:
        return json.dumps({"error": "No researchers found."}), 404

    researchers = [parse_researcher_xml(file) for file in selected_xml_files]
    researchers_dict = [researcher.to_dict() for researcher in researchers]
    response_body = json.dumps(researchers_dict, ensure_ascii=False).encode(
        "ISO-8859-1"
    )

    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


@app.route("/get-researcher/<string:name>", methods=["GET"])
def get_researcher(name):
    xml_file = get_one_xml_file("data/researchers", parse_researcher_name(name))

    if not xml_file:
        return json.dumps({"error": "Researcher not found."}), 404

    researcher = parse_researcher_xml(xml_file, all_info=True)
    researcher_dict = researcher.to_dict()
    response_body = json.dumps(researcher_dict, ensure_ascii=False).encode("ISO-8859-1")

    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


@app.route("/get-all-journal-articles", methods=["GET"])
def get_all_journal_articles_endpoint():
    page = request.args.get("page", default=1, type=int)
    base_path = "data/researchers"
    all_journal_articles = get_all_journal_articles(base_path)

    start_index = (page - 1) * 12
    end_index = start_index + 12

    paginated_articles = all_journal_articles[start_index:end_index]

    response_body = json.dumps(paginated_articles, ensure_ascii=False).encode("ISO-8859-1")

    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


if __name__ == "__main__":
    app.run(debug=True)
