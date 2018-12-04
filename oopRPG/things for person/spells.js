class spell{
    constructor(type) {
        this.type = type;
        this.possibleSpells = ["frost", "anti", "fire"];
        this.spell = {};
        this.spell.fire = {
            count: 0,
            damage : 4,
            weight: 2
        };

        this.spell.frost = {
            count: 0,
            damage : 1,
            weight: 2,
            dexterityDecrease : 8
        };

        this.spell.anti = {
            count: 0,
            damage: 0,
            dexterityBuff: 12,
            weight: 2,
        };
    }

    getSpellTypes() {
        return this.possibleSpells;
    }

    equipSpell(type) {
        if(type === "frost") {
            this.spellCount++;
            this.spell.fire.count++;
        } else if(type = "anti") {
            this.spellCount++;
            this.spell.frost.count++;
        } else {
            this.spellCount++;
            this.spell.anti.count++;
        }
    }
}