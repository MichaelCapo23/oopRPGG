$(document).ready(startApp);
var player1;
var player2;
function startApp() {
    domCreate();
    player1 = new person(player1, "mage");
    player2 = new person(player2, "warrior");
    addClickHandlersToElements();
}
function domCreate() {
    var consoleDiv = $("<div>", {
        class: "consoleDiv"
    });

    var player1Indicator = $("<div>", {
        "class" : "player1Indicator",
        "text" : "player 1"
    });

    var player2Indicator = $("<div>", {
        "class" : "player2Indicator",
        "text": "player 2"
    });

    var player1Inputs = $("<input>", {
        class : "player1Inputs"
    });

    var player2Inputs = $("<input>", {
        class : "player2Inputs"
    });


    $(".console").append(consoleDiv);
    $(".gameArea").append(player1Indicator).append(player2Indicator);
    player1Indicator.append(player1Inputs);
    player2Indicator.append(player2Inputs);
}

function addClickHandlersToElements() {
    $("body").on("click", ".button", takeInInput);
}

function takeInInput() {
    var userInput = $("button");
    if (this.hasClass("p1")) {
        var possibleWeapons = ["sword", "wand", "club", "Spear", "slingShot"];
        var bodyPartPossibilities = ["head", "chest", "legs"];
        var possibleSpells = ["frost", "anti", "fire"];
        if (possibleWeapons.indexOf(userInput) > -1) {
            var weapon = createWeapon(userInput);
            player1.equipWeapon(weapon);
        } else if (bodyPartPossibilities.indexOf(userInput) > -1) {
            var armor = createArmor(userInput);
            player1.equipArmor(armor);
        } else if (possibleSpells.indexOf(userInput) > -1) {
            var spell = createSpell(userInput);
            player1.equipSpell(spell);
        } else {
            console.log("Invalid input");
        }
    } else {
        var possibleWeapons = ["sword", "wand", "club", "Spear", "slingShot", "pistol"];
        var bodyPartPossibilities = ["head", "chest", "legs"];
        possibleSpells = ["frost", "anti", "fire"];
        if (possibleWeapons.indexOf(userInput) > -1) {
            var weapon = createWeapon(userInput);
            player2.equipWeapon(weapon);
        } else if (bodyPartPossibilities.indexOf(userInput) > -1) {
            var armor = createArmor(userInput);
            player2.equipArmor(armor);
        } else if (possibleSpells.indexOf(userInput) > -1) {
            var spell = createSpell(userInput);
            player2.equipSpell(spell);
        } else {
            console.log("Invalid input");
        }
    }
}

function createWeapon(userInput) {
    var weapon = new weapon(userInput);
    return weapon;
}

function createArmor(userInput) {
    var armor = new armor(userInput);
    return armor;
}

function createSpell(userInput) {
    var spell = new spell(userInput);
    return spell;
}
