const button = document.querySelector("#christmasbutton");
const tree = document.querySelector("#tree");
const page = document.querySelector("#page");
button.addEventListener("click", () => {
    tree.classList.toggle("move-right");
    page.classList.toggle("build");
    button.disabled = true;
    button.style.cursor = "default";
});