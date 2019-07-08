$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 121) + 19;

    console.log("Computer Number: " + randomNumber);

    $("#mainNumber").text(randomNumber);

    var num1 = Math.floor(Math.random() * 13) + 1;
    var num2 = Math.floor(Math.random() * 13) + 1;
    var num3 = Math.floor(Math.random() * 13) + 1;
    var num4 = Math.floor(Math.random() * 13) + 1;

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#totalWins").text(wins);
    $("#totalLosses").text(losses);

    function reset() {
        var randomNumber = Math.floor(Math.random() * 121 + 19);
        console.log(randomNumber);
        $("#mainNumber").text(randomNumber)

        var num1 = Math.floor(Math.random() * 12 + 1);
        var num2 = Math.floor(Math.random() * 12 + 1);
        var num3 = Math.floor(Math.random() * 12 + 1);
        var num4 = Math.floor(Math.random() * 12 + 1);

        $("#totalScore").text(totalScore);
    }

    function winner() {
        alert("Ayyy You Won!!!");
        wins++;
        $("#totalWins").text(wins);
        reset();
    }

    function loser() {
        alert("Ah Man You Lost!!!");
        losses++;
        $("#totalLosses").text(losses);
        reset();
    }

    //$(document).ready(function){
    $("#crystal1").on("click", function () {
        totalScore = totalScore + num1;
        console.log("new totalScore=" + totalScore);
        $("#score").text(totalScore)

        if (totalScore === randomNumber) {
            winner();
        } else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#crystal2").on("click", function () {
        totalScore = totalScore + num2;
        console.log("new totalScore=" + totalScore);
        $("#score").text(totalScore)

        if (totalScore === randomNumber) {
            winner();
        } else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#crystal3").on("click", function () {
        totalScore = totalScore + num3;
        console.log("new totalScore=" + totalScore);
        $("#score").text(totalScore)

        if (totalScore === randomNumber) {
            winner();
        } else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#crystal4").on("click", function () {
        totalScore = totalScore + num4;
        console.log("new totalScore=" + totalScore);
        $("#score").text(totalScore)

        if (totalScore === randomNumber) {
            winner();
        } else if (totalScore> randomNumber) {
            loser();
        }
    })
}