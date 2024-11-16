CREATE TABLE researchers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    resume_text TEXT,
    profile_pic TEXT
);

CREATE TABLE journal_articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    researcher_id VARCHAR(255) NOT NULL,
    production_sequence VARCHAR(255),
    importance_order VARCHAR(255),
    nature VARCHAR(255),
    title VARCHAR(255) NOT NULL,
    year INT,
    country VARCHAR(255),
    language VARCHAR(255),
    dissemination_medium VARCHAR(255),
    home_page TEXT,
    relevance_flag VARCHAR(255),
    doi VARCHAR(255),
    english_title VARCHAR(255),
    scientific_dissemination_flag VARCHAR(255),
    journal VARCHAR(255),
    issn VARCHAR(255),
    volume VARCHAR(255),
    issue VARCHAR(255),
    series VARCHAR(255),
    start_page VARCHAR(255),
    end_page VARCHAR(255),
    publication_location VARCHAR(255),
    authors TEXT,
    FOREIGN KEY (researcher_id) REFERENCES researchers (id) ON DELETE CASCADE
);
