import os
import base64
import xml.etree.ElementTree as ET
from classes.researcher import Researcher


def convert_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

def parse_research_xml(file_path):
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
        profile_pic_path = os.path.join(os.path.dirname(file_path), "profilepic" + extension)
        if os.path.isfile(profile_pic_path):
            profile_pic = convert_image_to_base64(profile_pic_path)
            break

    return Researcher(id, name, resume_text, profile_pic)


def get_all_xml_files(directory):
    import os

    xml_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".xml"):
                xml_files.append(os.path.join(root, file))
    return xml_files
