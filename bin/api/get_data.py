from api import Database

db = Database()
contacts = db.fetch_contacts()
print(contacts)