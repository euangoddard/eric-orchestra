document.querySelector("#orchestra-image");document.addEventListener("click",(e=>{const c=e.target;if("AREA"===c.tagName){console.log("clicked!",c.id),document.querySelectorAll("article").forEach((e=>e.classList.add("hidden")));document.querySelector("#article-"+c.id).classList.remove("hidden")}}));
//# sourceMappingURL=index.a65f7739.js.map
