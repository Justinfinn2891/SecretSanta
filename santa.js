const button = document.querySelector("#christmasbutton");
const tree = document.querySelector("#tree");
const page = document.querySelector("#page");
const background = document.querySelector("#background");
const submit = document.getElementById("submit");

// SUBMIT BUTTON TEMPORAY, THIS IS WHERE WE WILL COLLECT THE 5 NAMES AND DO THE RANDOM DRAW
submit.addEventListener("click", () => {
    window.alert("Under Construction!");
});


// CHEAP WAY TO DO ANIMATION
button.addEventListener("click", () => {
    background.classList.toggle("change");
    tree.classList.toggle("move-right");
    page.classList.toggle("build");
    button.disabled = true;
    button.style.cursor = "default";
});

// WHAT TO DO:
// 1.) Collect the 5 names
// 2.) Take those names and randomize them
// 3.) Find a way to give the names to the users (email maybe?)
// 4.) Drink Eggnog:) 