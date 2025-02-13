document.getElementById("colorButton").addEventListener("click", function() {
    let colors = ["#f4f4f4", "#ffcccb", "#d4edda", "#cce5ff", "#ffff99"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
