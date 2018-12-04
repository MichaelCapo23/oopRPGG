class person {
    constructor(name, charClass) {
        this.possibleWeapons = ["sword", "wand", "club", "Spear", "slingShot"];
        var bodyPartPossibilities = ["head", "chest", "legs"];
        var possibleSpells = ["frost", "anti", "fire"];
        this.hasWeapon = false;
        this.name = name;
        this.charClass = charClass;
        this.spellCount = 0;
        this.stats = {
            dexterity: null,
            strength: null,
            weakness: null
        }
    }

    equipWeapon(weapon) {
        for (var Pweapon in this.possibleWeapons) {
            if (this.possibleWeapons[Pweapon] === weapon) {
                this.hasWeapon = true;
                this.weapon.name = weapon.name;
                this.weapon.handCount = weapon.handCount;
                this.weapon.weight = weapon.weight;
                this.weapon.damage = weapon.damage;
                $(".console").text(`${currentplayer} has equipped a ${this.weapon.name}`);
            }
        }
    }

    equipArmor(part) {
        if (part === "head") {
            this.armor.head.nullification = 3;
            this.armor.head.weight = 3;
        } else if(part === "chest") {
            this.armor.chest.nullification = 3;
            this.armor.chest.weight = 3;
        }
    }

    checkIfWeaponEquip() {
        return this.hasWeapon;
    }

    getArmor() {
        //do later
    }

    getSpells() {
        return this.spellCount;
    }

    getFireSpells() {
        return this.spell.fire.count;
    }
}