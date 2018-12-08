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
            this.armor.head.weight = 2;
        } else if(part === "chest") {
            this.armor.chest.nullification = 2;
            this.armor.chest.weight = 2;
        } else {
            this.armor.legs.nullification = 1;
            this.armor.weight = 2;
        }
    }

    checkIfWeaponEquip() {
        return this.hasWeapon;
    }

    getArmorHead() {
        return this.armor.head;
    }

    getArmorChest() {
        return this.armor.chest;
    }

    getArmorLegs() {
        return this.armor.legs;
    }

    getSpells() {
        return this.spellCount;
    }

    getFireSpells() {
        return this.spell.fire.count;
    }

    getFrostSpells() {
        return this.spell.frost.count;
    }

    getAntiSpells() {
        return this.spell.anti.count;
    }
}