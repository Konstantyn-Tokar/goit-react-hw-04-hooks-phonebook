import { useState } from "react";
import shortid from "shortid";
import "./App.css";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import getFilterContacts from "./helpers/filter";
import { useLocalStorage } from "./hooks/localStorage";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", defaultContacts);
  const [filter, setFilter] = useState("");

  const handlelAddContact = (contact) => {
    contacts.some((userName) => userName.name === contact.name)
      ? alert("Пользователь с таким именем уже добавлен")
      : setContacts((prevstate) => [
          ...prevstate,
          { id: shortid.generate(), ...contact },
        ]);
  };

  const deliteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handelChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="App">
      <ContactForm handlelAddContact={handlelAddContact} />
      <Filter filter={filter} handelChangeFilter={handelChangeFilter} />
      <ContactList
        contacts={getFilterContacts(contacts, filter)}
        deliteContact={deliteContact}
      />
    </div>
  );
}

export default App;
