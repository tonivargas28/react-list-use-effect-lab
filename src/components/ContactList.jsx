import { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import usersData from "../data/users.json";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setContacts(usersData);
  }, []);

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h2>Lista de contactos</h2>
      <input
        type="text"
        placeholder="Filtrar contactos por nombre"
        value={filter}
        onChange={handleFilterChange}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={handleDeleteContact}
          />
        ))
      ) : (
        <p>No se encontraron contactos.</p>
      )}
    </div>
  );
};

export default ContactList;
