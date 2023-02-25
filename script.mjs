const imageElement = document.querySelector("#orchestra-image");
document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === "AREA") {
    console.log("clicked!", clickedElement.id);
    document
      .querySelectorAll("article")
      .forEach((article) => article.classList.add("hidden"));
    const articleElement = document.querySelector(
      "#article-" + clickedElement.id
    );
    articleElement.classList.remove("hidden");
  }
});
