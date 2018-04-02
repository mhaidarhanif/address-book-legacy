let addressBook = [];

console.log("Address Book");

const title = document.getElementById("title");
const addButton = document.getElementById("add-button");
const contacts = document.getElementById("contacts");

const addContact = () => {
  const fullname = document.getElementById("full-name").value;

  if (fullname !== "") {
    addressBook.push({ name: fullname });

    console.log(fullname, "is added as a contact");
    document.getElementById("full-name").value = "";
  } else {
    alert("Input can't be empty");
  }
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

const callAddThenShow = function() {
  addContact();
  showContacts();
};

addButton.addEventListener("click", callAddThenShow);
