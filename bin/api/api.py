from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import uvicorn
from starlette.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Database:
    def __init__(self):
        self.connection = sqlite3.connect("../../data/contacts.db")
        self.cursor = self.connection.cursor()
        self.cursor.execute("CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, message TEXT)")
        self.connection.commit()

    def insert_contact(self, name, email, message):
        self.cursor.execute("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", (name, email, message))
        self.connection.commit()

    def fetch_contacts(self):
        self.cursor.execute("SELECT * FROM contacts")
        contacts = self.cursor.fetchall()
        return contacts


class ContactInfo(BaseModel):
    name: str
    email: str
    message: str

contacts_db = Database()

@app.post("/submit-contact")
async def submit_contact(contact: ContactInfo):
    contacts_db.insert_contact(contact.name, contact.email, contact.message)
    return {"message": "Contact information received successfully!"}

@app.get("/contacts")
async def get_contacts():
    return contacts_db.fetch_contacts()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=11000)
