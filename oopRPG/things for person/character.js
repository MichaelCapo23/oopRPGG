class person {
    constructor(name, charClass) {
        this.possibleWeapons = ["sword", "wand", "club", "Spear", "slingShot", "pistol"];
        this.hasWeapon = false;
        this.name = name;
        this.charClass = charClass;
        this.weapon = {
            name:null,
            handCount: null,
            weight: null,
            damage: null,
        };

        this.spell = {
            name:null,
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
        for(var Pweapon in this.possibleWeapons) {
            if(this.possibleWeapons[Pweapon] === weapon) {
                this.hasWeapon = true;
                this.weapon.name = weapon.name;
                this.weapon.handCount = weapon.handCount;
                this.weapon.weight = weapon.weight;
                this.weapon.damage = weapon.damage;
                $(".console").text(`${currentplayer} has equipped a ${this.weapon.name}`);
            }
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

    checkArmor() {
        //do later
    }

    equipArmor() {

    }




}