const fetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((json) => eachData(json));
};
const eachData = (json) => {
  const dataList = document.getElementById("data-list");
  json.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element.title;
    dataList.appendChild(listItem);
  });
};
