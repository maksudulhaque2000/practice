const fetchDataOl = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((json) => eachDataOl(json));
};
const eachDataOl = (json) => {
  const dataListUl = document.getElementById("data-list-ol");
  json.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    dataListUl.appendChild(li);
  });
};

const fetchDataUl = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((json) => eachDataUl(json));
};
const eachDataUl = (json) => {
  const dataListOl = document.getElementById("data-list-ul");
  json.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    dataListOl.appendChild(li);
  });
};
