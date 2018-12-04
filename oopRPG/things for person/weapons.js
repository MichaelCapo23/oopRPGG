class weapon {
    constructor(type) {
        this.type = type;
        var possibleWeapons = ["sword", "wand", "club", "spear", "slingShot"];
        this.weapon = {
            name: "",
            handCount: null,
            weight: null,
            damage: null,
        };
    }

    getDamageCount(type) {
        if(type === "sword") {
            this.weapon.name = "sword";
            this.weapon.handCount = 1;
            this.weapon.weight = 6;
            this.weapon.damage = 5;
        } else if(type === "wand") {
            this.weapon.name = "wand";
            this.weapon.handCount = 1;
            this.weapon.weight = 3;
            this.weapon.damage = 2;
        } else if( type === "club") {
            this.weapon.name = "club";
            this.weapon.handCount = 1;
            this.weapon.weight = 5;
            this.weapon.damage = 4;
        } else if(type === "spear") {
            this.weapon.name = "spear";
            this.weapon.handCount = 2;
            this.weapon.weight = 10;
            this.weapon.damage = 8;
        } else if(type === "slingShot") {
            this.weapon.name = "slingShot";
            this.weapon.handCount = 2;
            this.weapon.weight = 5;
            this.weapon.damage = 7;
        } else {
            console.log("invalid input");
        }
    }

    dropWeapon() {
        $(".console").text(`${currentplayer} has dropped his ${this.weapon.name}`);
        this.hasWeapon = false;
        this.weapon.name = null;
        this.weapon.handCount = null;
        this.weapon.weight = null;
        this.weapon.damage = null;
    }
}