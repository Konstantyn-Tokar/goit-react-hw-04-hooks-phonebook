function getFilterContacts(contacts, filter) {
  console.log("отфильтровал");

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
}

export default getFilterContacts;
