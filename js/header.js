const head = document.querySelector(".nav1");

fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    head.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching header.html:", error));
