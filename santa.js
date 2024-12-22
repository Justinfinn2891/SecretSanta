const button = document.querySelector("#christmasbutton");
const tree = document.querySelector("#tree");
const page = document.querySelector("#page");
const background = document.querySelector("#background");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    window.alert("Under Construction!");
});

button.addEventListener("click", () => {
    background.classList.toggle("change");
    tree.classList.toggle("move-right");
    page.classList.toggle("build");
    button.disabled = true;
    button.style.cursor = "default";
});