from classes.journal_article import JournalArticle


class Researcher:
    def __init__(self, id, name, resume_text, profile_pic):
        self.id = id
        self.name = name
        self.resume_text = resume_text
        self.profile_pic = profile_pic
        self.journal_articles = []

    def to_dict(self):
        sorted_journal_articles = sorted(
            self.journal_articles,
            key=lambda journal_article: journal_article.year,
            reverse=True,
        )
        return {
            "id": self.id,
            "name": self.name,
            "resume_text": self.resume_text,
            "profile_pic": self.profile_pic,
            "journal_articles": [
                journal_article.to_dict() for journal_article in sorted_journal_articles
            ],
        }

    def add_journal_article(self, journal_article):
        if not isinstance(journal_article, JournalArticle):
            raise ValueError("journal_article must be an instance of JournalArticle.")

        self.journal_articles.append(journal_article)
