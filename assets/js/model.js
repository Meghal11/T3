app.factory("myfactory", () => {
    const object = {
        buttons: [],
        state: false,
        createButtons() {
            for (let i = 1; i <= 9; i++) {
                this.buttons.push(new Button(i));
            }
            return this.buttons;
        },
        writeButton(position) {
            this.state = this.buttons[position].toggle(this.state);
            if (this.gameOver() == 'X') {
                return "Player 2 has won!";
            } else {
                if (this.gameOver() == 'O') {
                    return "Player 1 has won!";
                } else {
                    if (this.gameOver() == 'tied') {
                        return "Match Tied";
                    } else {
                        return false;
                    }
                }
            }
        },
        writeButton1(position) {
            this.state = this.buttons[position].toggle(this.state);
            if (this.gameOver() == 'X') {
                return "Computer has won!";
            } else {
                if (this.gameOver() == 'O') {
                    return "Player has won!";
                } else {
                    if (this.gameOver() == 'tied') {
                        return "Match Tied";
                    } else {
                        return false;
                    }
                }
            }
        },
        gameOver() {
            if (this.isNotEmpty(0) && this.isNotEmpty(1) && this.isNotEmpty(2)) {
                if (this.compareLine(0, 1, 2)) {
                    this.winPlayer(0, 1, 2);
                    return this.buttons[0].value;
                }
            }
            if (this.isNotEmpty(3) && this.isNotEmpty(4) && this.isNotEmpty(5)) {
                if (this.compareLine(3, 4, 5)) {
                    this.winPlayer(3, 4, 5);
                    return this.buttons[3].value;
                }
            }
            if (this.isNotEmpty(6) && this.isNotEmpty(7) && this.isNotEmpty(8)) {
                if (this.compareLine(6, 7, 8)) {
                    this.winPlayer(6, 7, 8);
                    return this.buttons[6].value;
                }
            }
            if (this.isNotEmpty(0) && this.isNotEmpty(3) && this.isNotEmpty(6)) {
                if (this.compareLine(0, 3, 6)) {
                    this.winPlayer(0, 3, 6);
                    return this.buttons[0].value;
                }
            }
            if (this.isNotEmpty(1) && this.isNotEmpty(4) && this.isNotEmpty(7)) {
                if (this.compareLine(1, 4, 7)) {
                    this.winPlayer(1, 4, 7);
                    return this.buttons[1].value;
                }
            }
            if (this.isNotEmpty(2) && this.isNotEmpty(5) && this.isNotEmpty(8)) {
                if (this.compareLine(2, 5, 8)) {
                    this.winPlayer(2, 5, 8);
                    return this.buttons[2].value;
                }
            }
            if (this.isNotEmpty(0) && this.isNotEmpty(4) && this.isNotEmpty(8)) {
                if (this.compareLine(0, 4, 8)) {
                    this.winPlayer(0, 4, 8);
                    return this.buttons[0].value;
                }
            }
            if (this.isNotEmpty(2) && this.isNotEmpty(4) && this.isNotEmpty(6)) {
                if (this.compareLine(2, 4, 6)) {
                    this.winPlayer(2, 4, 6);
                    return this.buttons[2].value;
                }
            }
            if (this.isNotEmpty(0) && this.isNotEmpty(1) && this.isNotEmpty(2) && this.isNotEmpty(3) && this.isNotEmpty(4) && this.isNotEmpty(5) && this.isNotEmpty(6) && this.isNotEmpty(7) && this.isNotEmpty(8)) {
                return 'tied';
            }
            return false;
        },
        isNotEmpty(i) {
            return this.buttons[i].value == "" ? false : true;
        },
        compareLine(a, b, c) {
            if (this.buttons[a].value == this.buttons[b].value && this.buttons[b].value == this.buttons[c].value) {
                return true;
            }
            return false;
        },
        getPlayer() {
            return this.state;
        },
        showValue(position) {
            return this.buttons[position].show();
        },
        winPlayer(a, b, c) {
            this.buttons[a].isWin = true;
            this.buttons[b].isWin = true;
            this.buttons[c].isWin = true;
        },
        nullWin(a) {
            this.buttons[a].isWin = false;
            this.buttons[a].value = "";
        }
    }
    return object;
})