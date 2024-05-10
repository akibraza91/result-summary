// Variable initialization
const myScores = document.querySelectorAll(".numbers");
const totalScore = document.querySelector(".total-score");
let numbersArr = [];

fetch("data.json").then((res) => {
    return res.json()
}).then((data) => {
    myScores.forEach((element, index) => {
        element.textContent = data[index].score;
        numbersArr.push(data[index].score)

        const totalNum = numbersArr.reduce((acc, curr) => acc + curr);
        const totalPer = Math.floor(totalNum / 4);
        totalScore.textContent = totalPer;
    })
})

