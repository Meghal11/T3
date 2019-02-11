app.controller("cntrl", ($scope, myfactory) => {
    $scope.value = false;
    $scope.val = false;
    $scope.val1 = false;
    $scope.value1 = "show";
    $scope.value2 = "hide";
    $scope.value3 = "show";
    $scope.value4 = "hide";
    $scope.value5 = "hide";
    var i = 0;
    var computer_choice;
    $scope.startNew = () => {
        window.location.reload();
    }

    $scope.singlePlayer = () => {
        $scope.value1 = "hide";
        $scope.value2 = "row1";
        $scope.value3 = "hide";
        $scope.value4 = "show";
        var buttons = myfactory.createButtons();
        $scope.buttons = buttons;
        $scope.clickEvent = (position) => {
            var text = myfactory.writeButton1(position);
            if (text) {
                $scope.final_message = text;
                $scope.value = true;
                $scope.val = true;
            }
            if (!text) {
                var state = myfactory.getPlayer();
                if (state == true) {
                    firstMove();
                }
            }
        }
    }

    function firstMove() {
        if (myfactory.showValue(0) === 'X' && myfactory.showValue(1) === 'X' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(1) == 'X' && myfactory.showValue(2) == 'X' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(0) == 'X' && myfactory.showValue(2) == 'X' && myfactory.showValue(1) === '') {
            $scope.clickEvent(1);
        } else if (myfactory.showValue(3) == 'X' && myfactory.showValue(4) == 'X' && myfactory.showValue(5) === '') {
            $scope.clickEvent(5);
        } else if (myfactory.showValue(4) == 'X' && myfactory.showValue(5) == 'X' && myfactory.showValue(3) === '') {
            $scope.clickEvent(3);
        } else if (myfactory.showValue(3) == 'X' && myfactory.showValue(5) == 'X' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(6) == 'X' && myfactory.showValue(7) == 'X' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(7) === 'X' && myfactory.showValue(8) === 'X' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(6) == 'X' && myfactory.showValue(8) == 'X' && myfactory.showValue(7) === '') {
            $scope.clickEvent(7);
        } else if (myfactory.showValue(0) == 'X' && myfactory.showValue(3) == 'X' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(3) == 'X' && myfactory.showValue(6) == 'X' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(6) == 'X' && myfactory.showValue(0) == 'X' && myfactory.showValue(3) === '') {
            $scope.clickEvent(3);
        } else if (myfactory.showValue(1) == 'X' && myfactory.showValue(4) == 'X' && myfactory.showValue(7) === '') {
            $scope.clickEvent(7);
        } else if (myfactory.showValue(4) == 'X' && myfactory.showValue(7) == 'X' && myfactory.showValue(1) === '') {
            $scope.clickEvent(1);
        } else if (myfactory.showValue(1) == 'X' && myfactory.showValue(7) == 'X' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(2) == 'X' && myfactory.showValue(5) == 'X' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(5) == 'X' && myfactory.showValue(8) == 'X' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(2) == 'X' && myfactory.showValue(8) == 'X' && myfactory.showValue(5) === '') {
            $scope.clickEvent(5);
        } else if (myfactory.showValue(0) == 'X' && myfactory.showValue(4) == 'X' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(4) == 'X' && myfactory.showValue(8) == 'X' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(0) == 'X' && myfactory.showValue(8) == 'X' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(2) == 'X' && myfactory.showValue(4) == 'X' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(4) == 'X' && myfactory.showValue(6) == 'X' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(2) == 'X' && myfactory.showValue(6) == 'X' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(0) === 'O' && myfactory.showValue(1) === 'O' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(1) == 'O' && myfactory.showValue(2) == 'O' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(0) == 'O' && myfactory.showValue(2) == 'O' && myfactory.showValue(1) === '') {
            $scope.clickEvent(1);
        } else if (myfactory.showValue(3) == 'O' && myfactory.showValue(4) == 'O' && myfactory.showValue(5) === '') {
            $scope.clickEvent(5);
        } else if (myfactory.showValue(4) == 'O' && myfactory.showValue(5) == 'O' && myfactory.showValue(3) === '') {
            $scope.clickEvent(3);
        } else if (myfactory.showValue(3) == 'O' && myfactory.showValue(5) == 'O' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(6) == 'O' && myfactory.showValue(7) == 'O' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(7) === 'O' && myfactory.showValue(8) === 'O' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(6) == 'O' && myfactory.showValue(8) == 'O' && myfactory.showValue(7) === '') {
            $scope.clickEvent(7);
        } else if (myfactory.showValue(0) == 'O' && myfactory.showValue(3) == 'O' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(3) == 'O' && myfactory.showValue(6) == 'O' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(6) == 'O' && myfactory.showValue(0) == 'O' && myfactory.showValue(3) === '') {
            $scope.clickEvent(3);
        } else if (myfactory.showValue(1) == 'O' && myfactory.showValue(4) == 'O' && myfactory.showValue(7) === '') {
            $scope.clickEvent(7);
        } else if (myfactory.showValue(4) == 'O' && myfactory.showValue(7) == 'O' && myfactory.showValue(1) === '') {
            $scope.clickEvent(1);
        } else if (myfactory.showValue(1) == 'O' && myfactory.showValue(7) == 'O' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(2) == 'O' && myfactory.showValue(5) == 'O' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(5) == 'O' && myfactory.showValue(8) == 'O' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(2) == 'O' && myfactory.showValue(8) == 'O' && myfactory.showValue(5) === '') {
            $scope.clickEvent(5);
        } else if (myfactory.showValue(0) == 'O' && myfactory.showValue(4) == 'O' && myfactory.showValue(8) === '') {
            $scope.clickEvent(8);
        } else if (myfactory.showValue(4) == 'O' && myfactory.showValue(8) == 'O' && myfactory.showValue(0) === '') {
            $scope.clickEvent(0);
        } else if (myfactory.showValue(0) == 'O' && myfactory.showValue(8) == 'O' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else if (myfactory.showValue(2) == 'O' && myfactory.showValue(4) == 'O' && myfactory.showValue(6) === '') {
            $scope.clickEvent(6);
        } else if (myfactory.showValue(4) == 'O' && myfactory.showValue(6) == 'O' && myfactory.showValue(2) === '') {
            $scope.clickEvent(2);
        } else if (myfactory.showValue(2) == 'O' && myfactory.showValue(6) == 'O' && myfactory.showValue(4) === '') {
            $scope.clickEvent(4);
        } else {
            computer_choice = Math.floor((Math.random() * 8));
            var text1 = myfactory.showValue(computer_choice);
            if (text1 == "") {
                $scope.clickEvent(computer_choice);
            } else {
                firstMove();
            }
        }
    }

    $scope.multiPlayer = () => {
        $scope.value1 = "hide";
        $scope.value2 = "row1";
        $scope.value3 = "hide";
        $scope.value5 = "show";
        var buttons = myfactory.createButtons();
        $scope.buttons = buttons;
        $scope.clickEvent = (position) => {
            var text = myfactory.writeButton(position);
            if (text) {
                $scope.final_message = text;
                $scope.value = true;
                $scope.val1 = true;
            }
            if (!text) {
                var state = myfactory.getPlayer();
                if (state == false) {
                    $scope.turn_message = "Player 1- It's your turn";
                } else if (state == true) {
                    $scope.turn_message = "Player 2- It's your turn";
                }
            }
        }
    }

    $scope.singleRepeat = () => {
        $scope.final_message = " ";
        $scope.value = false;
        $scope.val = false;
        myfactory.state = false;
        for (i = 0; i < 9; i++) {
            $scope.buttons[i].value = " ";
            myfactory.nullWin(i);
        }
        $scope.singlePlayer();
    }

    $scope.multiRepeat = () => {
        $scope.final_message = " ";
        $scope.value = false;
        $scope.val1 = false;
        myfactory.state = false;
        for (i = 0; i < 9; i++) {
            $scope.buttons[i].value = " ";
            myfactory.nullWin(i);
        }
        $scope.multiPlayer();
    }
})