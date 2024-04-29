class ButtonParams {
    constructor(id, targetId, action, actionInfo, text) {
        this.id = id;
        this.targetId = targetId;
        this.action = action;
        this.actionInfo = actionInfo;
        this.text =text
        // this.text = JSON.parse(JSON.stringify(text));
    }
}

export default ButtonParams;