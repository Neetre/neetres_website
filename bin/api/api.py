from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import uvicorn
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactInfo(BaseModel):
    name: str
    email: str
    message: str

contacts_db = []

@app.post("/submit-contact")
async def submit_contact(contact: ContactInfo):
    contacts_db.append(contact)
    return {"message": "Contact information received successfully!"}

@app.get("/contacts")
async def get_contacts():
    return contacts_db

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=11000)
