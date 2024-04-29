class LayoutParams {
    constructor(id, collection, document, loop, condition) {
        this.id = id;
        this.collection = collection; // {source/null}
        this.document = document; // {source: source/null, condition}
        this.loop = loop; // {source: source/null, condition}
        this.condition = condition; // {source: source/null, condition}
    }
}

export default LayoutParams;