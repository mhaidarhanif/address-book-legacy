console.log("Address Book");

let addressBook = [];

const contacts = document.getElementById("contacts");

const addContact = () => {
  const fullname = document.getElementById("fullname").value;
  addressBook.push({ name: fullname });

  console.log(fullname, "is added as a contact");
  document.getElementById("fullname").value = "";
};

const showContacts = () => {
  contacts.innerHTML = "";

  addressBook.map(contact => {
    const li = document.createElement("li");
    const contactNode = document.createTextNode(contact.name);
    li.appendChild(contactNode);

    contacts.append(li);
  });
};
