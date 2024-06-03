class Researcher:
    def __init__(self, id, name, resume_text, profile_pic):
        self.id = id
        self.name = name
        self.resume_text = resume_text
        self.profile_pic = profile_pic

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "resume_text": self.resume_text,
            "profile_pic": self.profile_pic,
        }
