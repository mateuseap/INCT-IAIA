class JournalArticle:
    def __init__(
        self,
        production_sequence=None,
        importance_order=None,
        nature=None,
        title=None,
        year=None,
        country=None,
        language=None,
        dissemination_medium=None,
        home_page=None,
        relevance_flag=None,
        doi=None,
        english_title=None,
        scientific_dissemination_flag=None,
        journal=None,
        issn=None,
        volume=None,
        issue=None,
        series=None,
        start_page=None,
        end_page=None,
        publication_location=None,
        authors=None,
    ):
        self.production_sequence = production_sequence
        self.importance_order = importance_order
        self.nature = nature
        self.title = title
        self.year = year
        self.country = country
        self.language = language
        self.dissemination_medium = dissemination_medium
        self.home_page = home_page
        self.relevance_flag = relevance_flag
        self.doi = doi
        self.english_title = english_title
        self.scientific_dissemination_flag = scientific_dissemination_flag
        self.journal = journal
        self.issn = issn
        self.volume = volume
        self.issue = issue
        self.series = series
        self.start_page = start_page
        self.end_page = end_page
        self.publication_location = publication_location
        self.authors = authors

    @classmethod
    def from_xml(cls, article_element):
        production_sequence = article_element.find("SEQUENCIA-PRODUCAO")
        production_sequence = (
            production_sequence.attrib.get("SEQUENCIA-PRODUCAO")
            if production_sequence is not None
            else None
        )

        importance_order = article_element.find("ORDEM-IMPORTANCIA")
        importance_order = (
            importance_order.text if importance_order is not None else None
        )

        dados_basicos = article_element.find("DADOS-BASICOS-DO-ARTIGO")
        nature = dados_basicos.attrib.get("NATUREZA")
        title = dados_basicos.attrib.get("TITULO-DO-ARTIGO")
        year = dados_basicos.attrib.get("ANO-DO-ARTIGO")
        country = dados_basicos.attrib.get("PAIS-DE-PUBLICACAO")
        language = dados_basicos.attrib.get("IDIOMA")
        dissemination_medium = dados_basicos.attrib.get("MEIO-DE-DIVULGACAO")
        home_page = dados_basicos.attrib.get("HOME-PAGE-DO-TRABALHO")
        relevance_flag = dados_basicos.attrib.get("FLAG-RELEVANCIA")
        doi = dados_basicos.attrib.get("DOI")
        english_title = dados_basicos.attrib.get("TITULO-DO-ARTIGO-INGLES")
        scientific_dissemination_flag = dados_basicos.attrib.get("FLAG-DIVULGACAO-CIENTIFICA")

        detalhamento = article_element.find("DETALHAMENTO-DO-ARTIGO")
        journal = detalhamento.attrib.get("TITULO-DO-PERIODICO-OU-REVISTA")
        issn = detalhamento.attrib.get("ISSN")
        volume = detalhamento.attrib.get("VOLUME")
        issue = detalhamento.attrib.get("FASCICULO")
        series = detalhamento.attrib.get("SERIE")
        start_page = detalhamento.attrib.get("PAGINA-INICIAL")
        end_page = detalhamento.attrib.get("PAGINA-FINAL")
        publication_location = detalhamento.attrib.get("LOCAL-DE-PUBLICACAO")

        authors = [author.attrib.get("NOME-COMPLETO-DO-AUTOR") for author in article_element.findall("AUTORES")]

        return cls(
            production_sequence,
            importance_order,
            nature,
            title,
            year,
            country,
            language,
            dissemination_medium,
            home_page,
            relevance_flag,
            doi,
            english_title,
            scientific_dissemination_flag,
            journal,
            issn,
            volume,
            issue,
            series,
            start_page,
            end_page,
            publication_location,
            authors,
        )

    def to_dict(self):
        return {
            "production_sequence": self.production_sequence,
            "importance_order": self.importance_order,
            "nature": self.nature,
            "title": self.title,
            "year": self.year,
            "country": self.country,
            "language": self.language,
            "dissemination_medium": self.dissemination_medium,
            "home_page": self.home_page,
            "relevance_flag": self.relevance_flag,
            "doi": self.doi,
            "english_title": self.english_title,
            "scientific_dissemination_flag": self.scientific_dissemination_flag,
            "journal": self.journal,
            "issn": self.issn,
            "volume": self.volume,
            "issue": self.issue,
            "series": self.series,
            "start_page": self.start_page,
            "end_page": self.end_page,
            "publication_location": self.publication_location,
            "authors": self.authors,
        }