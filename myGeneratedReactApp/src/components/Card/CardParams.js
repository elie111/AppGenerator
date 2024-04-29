class CardParams {
    constructor(id, cardId, image, shortDescription, longDescription) {
        this.id = id;
        this.cardId = cardId;
        this.image = image;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription; // an array
    }
}

export default CardParams;