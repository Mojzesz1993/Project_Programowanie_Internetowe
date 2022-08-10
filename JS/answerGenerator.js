function answerGenerator() {

    var answers = [
        "Zdecydowanie tak!",
        "Ależ oczywiście!",
        "Bez wątpienia!",
        "Bezapelacyjnie!",
        "Naturalnie!",
        "Ma się rozumieć!",
        "Rzecz jasna!",
        "Rzecz oczywista!",
        "Jasne!",
        "Owszem!",
        "A jakże!",
        "I to jak!",
        "Rozumie się!",
    ]

    var answer = document.getElementById("answer"),
    randomItem = answers[Math.floor(Math.random()*answers.length)];
    answer.innerHTML = randomItem;
}