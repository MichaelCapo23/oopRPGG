class person {
    constructor(name, charClass) {
        this.possibleWeapons = ["sword", "wand", "club", "Spear", "slingShot", "pistol"];
        var bodyPartPossibilities = ["head", "chest", "legs"];
        this.hasWeapon = false;
        this.name = name;
        this.charClass = charClass;
        this.armor = {};
        this.armor.head = {
            weight: null,
            nullification: null,
        };
        this.armor.chest = {
            weight: null,
            nullification: null,
        };
        this.armor.legs = {
            weight: null,
            nullification: null,
        };

        this.weapon = {
            name: null,
            handCount: null,
            weight: null,
            damage: null,
        };

        this.spell = {
            name: null,
            type: null,
            weight: null,
            spellDamage: null
        };

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

    dropWeapon() {
        $(".console").text(`${currentplayer} has dropped his ${this.weapon.name}`);
        this.hasWeapon = false;
        this.weapon.name = null;
        this.weapon.handCount = null;
        this.weapon.weight = null;
        this.weapon.damage = null;
    }

    checkIfWeaponEquip() {
        return this.hasWeapon;
    }

    getArmor() {
        //do later
    }

}