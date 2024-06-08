import os
import base64
import xml.etree.ElementTree as ET
from classes.journal_article import JournalArticle
from classes.researcher import Researcher


def convert_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


def parse_researcher_journals_articles(researcher, article_elements):
    for article_element in article_elements:
        article = JournalArticle.from_xml(article_element)
        researcher.add_journal_article(article)


def parse_researcher_xml(file_path, all_info=False):
    parser = ET.XMLParser(encoding="ISO-8859-1")
    tree = ET.parse(file_path, parser=parser)
    root = tree.getroot()

    id = root.attrib.get("NUMERO-IDENTIFICADOR")
    name_element = root.find(".//DADOS-GERAIS")
    name = (
        name_element.attrib.get("NOME-COMPLETO") if name_element is not None else None
    )

    resume_text_element = root.find(".//RESUMO-CV")
    resume_text = (
        resume_text_element.attrib.get("TEXTO-RESUMO-CV-RH")
        if resume_text_element is not None
        else None
    )

    profile_pic_extensions = [
        ".jpg",
        ".jpeg",
        ".gif",
        ".png",
    ]
    profile_pic = None
    for extension in profile_pic_extensions:
        profile_pic_path = os.path.join(
            os.path.dirname(file_path), "profilepic" + extension
        )
        if os.path.isfile(profile_pic_path):
            profile_pic = convert_image_to_base64(profile_pic_path)
            break

    researcher = Researcher(id, name, resume_text, profile_pic)

    if all_info:
        article_elements = root.findall(".//ARTIGO-PUBLICADO")
        parse_researcher_journals_articles(researcher, article_elements)

    return researcher


def parse_journal_articles_from_xml(file_path):
    parser = ET.XMLParser(encoding="ISO-8859-1")
    tree = ET.parse(file_path, parser=parser)
    root = tree.getroot()

    article_elements = root.findall(".//ARTIGO-PUBLICADO")
    journal_articles = [
        JournalArticle.from_xml(article_element).to_dict()
        for article_element in article_elements
    ]
    sorted_journal_articles = sorted(
        journal_articles, key=lambda journal_article: journal_article["year"], reverse=True
    )

    return sorted_journal_articles


def parse_researcher_name(name):
    return " ".join(
        [
            word.capitalize() if word not in ["de", "da", "dos"] else word
            for word in name.split("-")
        ]
    )


def get_all_xml_files(base_path):
    xml_files = []

    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.endswith(".xml"):
                xml_files.append(os.path.join(root, file))

    xml_files.sort()

    return xml_files


def get_one_xml_file(base_path, name):
    researcher_path = os.path.join(base_path, name)

    if not os.path.isdir(researcher_path):
        return None

    xml_file = os.path.join(researcher_path, "curriculo.xml")

    return xml_file


def get_all_journal_articles(base_path):
    xml_files = get_all_xml_files(base_path)
    all_journal_articles = []

    for xml_file in xml_files:
        journal_articles = parse_journal_articles_from_xml(xml_file)
        all_journal_articles.extend(journal_articles)

    return all_journal_articles
