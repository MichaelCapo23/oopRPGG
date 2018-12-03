$(document).ready(startApp);

function startApp() {
    domCreate();
}
function domCreate() {
    var consoleDiv = $("<div>", {
        class: "consoleDiv"
    })

    var player1Indicator = $("<div>", {
        "class" : "player1Indicator",
        "text" : "player 1"
    });

    var player2Indicator = $("<div>", {
        "class" : "player2Indicator",
        "text": "player 2"
    })

    var player1Inputs = $("<input>", {
        class : "player1Inputs"
    })

    var player2Inputs = $("<input>", {
        class : "player2Inputs"
    })

    $(".console").append(consoleDiv);
    $(".gameArea").append(player1Indicator).append(player2Indicator);
    player1Indicator.append(player1Inputs);
    player2Indicator.append(player2Inputs);
}