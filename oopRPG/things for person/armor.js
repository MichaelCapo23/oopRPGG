class armor {
    constructor(bodyPart) {
        this.bodyPartPossibilities = ["head", "chest", "legs"];
        this.checkIfValidBodyPart(bodyPart);
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
    }

    checkIfValidBodyPart(bodyPart) {
        for(var part in this.bodyPartPossibilities) {
            if(this.bodyPartPossibilities[part] === bodyPart) {
                this.bodyPart = bodyPart;
            }
        }
    }


}