const foot = document.querySelector(".nav2");
fetch("./footer.html")
  .then((res) => res.text())
  .then((data) => {
    foot.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching footer.html:", error));
