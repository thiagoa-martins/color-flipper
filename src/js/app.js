const clickMeButton = document.querySelector("#clickMe");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

const colorsSimples = ["green", "red", "black", "yellow", "orange", "pink", "purple", "blue", "rgb(241, 80, 37)", "rgb(133, 122, 200)"];

const colorsHex = [
    {
        colorName: "#4548EB",
        colorCode: "rgb(69, 72, 235)"
    },

    {
        colorName: "#F3F8BD",
        colorCode: "rgb(243, 248, 189)"
    },

    {
        colorName: "#FF4C08",
        colorCode: "rgb(255, 76, 8)"
    },

    {
        colorName: "#6C5DF2",
        colorCode: "rgb(108, 93, 242)"
    },

    {
        colorName: "#7E815A",
        colorCode: "rgb(126, 129, 90)"
    },

    {
        colorName: "#FF4C08",
        colorCode: "rgb(255, 76, 8)"
    },

    {
        colorName: "#5C7564",
        colorCode: "rgb(92, 117, 100)"
    },

    {
        colorName: "#D55895",
        colorCode: "rgb(213, 88, 149)"
    },

    {
        colorName: "#C283CB",
        colorCode: "rgb(194, 131, 203)"
    },

    {
        colorName: "#7DB44B",
        colorCode: "rgb(125, 180, 75)"
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


