const title = document.getElementById("title");
const addButton = document.getElementById("add-button");

const alertName = function() {
  const fullname = document.getElementById("full-name").value;
  alert(fullname);
};

title.addEventListener("click", alertName);
addButton.addEventListener("click", alertName);
