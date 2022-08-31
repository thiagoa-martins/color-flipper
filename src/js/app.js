const clickMeButton = document.querySelector("#clickMe");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

const colorsSimples = ["green", "red", "black", "yellow", "orange", "pink", "purple", "blue", "rgb(241, 80, 37)", "rgb(133, 122, 200)"];

const colorsHex = [
    {
        colorName: "#4548EB",
        colorCode: "#4548EB"
    },

    {
        colorName: "#F3F8BD",
        colorCode: "#F3F8BD"
    },

    {
        colorName: "#FF4C08",
        colorCode: "#FF4C08"
    },

    {
        colorName: "#6C5DF2",
        colorCode: "#6C5DF2"
    },

    {
        colorName: "#7E815A",
        colorCode: "#7E815A"
    },

    {
        colorName: "#FF4C08",
        colorCode: "#FF4C08"
    },

    {
        colorName: "#5C7564",
        colorCode: "#5C7564"
    },

    {
        colorName: "#D55895",
        colorCode: "#D55895"
    },

    {
        colorName: "#C283CB",
        colorCode: "#C283CB"
    },

    {
        colorName: "#7DB44B",
        colorCode: "#7DB44B"
    }
];

function randomNumber(colors) {
    return Math.round(Math.random() * (colors.length - 1));
}

clickMeButton.addEventListener("click", () => {
    const index = randomNumber(colorsSimples);

    colorText.textContent = colorsSimples[index];
    body.style.backgroundColor = colorsSimples[index];

    if(clickMeButton.classList.contains("hex")) {
        const index = randomNumber(colorsHex);

        colorText.textContent = colorsHex[index].colorName;
        body.style.backgroundColor = colorsHex[index].colorCode;
    }
});


