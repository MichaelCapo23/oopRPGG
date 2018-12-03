class armor {
    constructor(bodyPart) {
        this.bodyPartPossibilities = ["head", "chest", "legs"];
        this.checkIfValidBodyPart(bodyPart);
    }

    checkIfValidBodyPart(bodyPart) {
        for(var part in this.bodyPartPossibilities) {
            if(this.bodyPartPossibilities[part] === bodyPart) {
                this.bodyPart = bodyPart;
            }
        }
    }


}