from flask import Flask
from flask_cors import CORS
from utils import get_all_xml_files, parse_research_xml
import json


app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/get-researchers/<int:page>", methods=["GET"])
def get_researchers(page):
    xml_directory = "data/researchers"

    all_xml_files = get_all_xml_files(xml_directory)
    all_xml_files.sort()

    selected_xml_files = all_xml_files[(page - 1) * 6 : page * 6]

    if not selected_xml_files:
        return json.dumps({"error": "No researchers found."}), 404

    researchers = [parse_research_xml(file) for file in selected_xml_files]

    researchers_dict = [researcher.to_dict() for researcher in researchers]
    response_body = json.dumps(researchers_dict, ensure_ascii=False).encode(
        "ISO-8859-1"
    )

    return response_body, 200, {"Content-Type": "application/json; charset=ISO-8859-1"}


if __name__ == "__main__":
    app.run(debug=True)
