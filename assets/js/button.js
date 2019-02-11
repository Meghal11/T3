class Button {
    constructor(position) {
        this.position = position;
        this.value = "";
        this.isWin = false;
    }
    toggle(state) {
        if (!this.value) {
            this.value = state ? 'X' : 'O';
            state = !state;
        }
        return state;
    }
    show() {
        return this.value;
    }
}