flag = 1;
function firstBlock() {
    if (flag == 1) {
        document.getElementById("block1").value = "X";
        document.getElementById("block1").style.color = "red";
        document.getElementById("block1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block1").value = "O";
        document.getElementById("block1").style.color = "blue";
        document.getElementById("block1").disabled = true;
        flag = 1;
    }
}
  
function secondBlock() {
    if (flag == 1) {
        document.getElementById("block2").value = "X";
        document.getElementById("block2").style.color = "red";
        document.getElementById("block2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block2").value = "O";
        document.getElementById("block2").style.color = "blue";
        document.getElementById("block2").disabled = true;
        flag = 1;
    }
}
  
function thirdBlock() {
    if (flag == 1) {
        document.getElementById("block3").value = "X";
        document.getElementById("block3").style.color = "red";
        document.getElementById("block3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block3").value = "O";
        document.getElementById("block3").style.color = "blue";
        document.getElementById("block3").disabled = true;
        flag = 1;
    }
}
  
function fourthBlock() {
    if (flag == 1) {
        document.getElementById("block4").value = "X";
        document.getElementById("block4").style.color = "red";
        document.getElementById("block4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block4").value = "O";
        document.getElementById("block4").style.color = "blue";
        document.getElementById("block4").disabled = true;
        flag = 1;
    }
}
  
function fifthBlock() {
    if (flag == 1) {
        document.getElementById("block5").value = "X";
        document.getElementById("block5").style.color = "red";
        document.getElementById("block5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block5").value = "O";
        document.getElementById("block5").style.color = "blue";
        document.getElementById("block5").disabled = true;
        flag = 1;
    }
}
  
function sixthBlock() {
    if (flag == 1) {
        document.getElementById("block6").value = "X";
        document.getElementById("block6").style.color = "red";
        document.getElementById("block6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block6").value = "O";
        document.getElementById("block6").style.color = "blue";
        document.getElementById("block6").disabled = true;
        flag = 1;
    }
}
  
function seventhBlock() {
    if (flag == 1) {
        document.getElementById("block7").value = "X";
        document.getElementById("block7").style.color = "red";
        document.getElementById("block7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block7").value = "O";
        document.getElementById("block7").style.color = "blue";
        document.getElementById("block7").disabled = true;
        flag = 1;
    }
}
  
function eighthBlock() {
    if (flag == 1) {
        document.getElementById("block8").value = "X";
        document.getElementById("block8").style.color = "red";
        document.getElementById("block8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block8").value = "O";
        document.getElementById("block8").style.color = "blue";
        document.getElementById("block8").disabled = true;
        flag = 1;
    }
}
  
function ninthBlock() {
    if (flag == 1) {
        document.getElementById("block9").value = "X";
        document.getElementById("block9").style.color = "red";
        document.getElementById("block9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("block9").value = "O";
        document.getElementById("block9").style.color = "blue";
        document.getElementById("block9").disabled = true;
        flag = 1;
    }
}

function gameTicTacToe() {
    var block1, block2, block3, block4, block5, block6, block7, block8, block9;
    block1 = document.getElementById("block1").value;
    block2 = document.getElementById("block2").value;
    block3 = document.getElementById("block3").value;
    block4 = document.getElementById("block4").value;
    block5 = document.getElementById("block5").value;
    block6 = document.getElementById("block6").value;
    block7 = document.getElementById("block7").value;
    block8 = document.getElementById("block8").value;
    block9 = document.getElementById("block9").value;
    //Player X Win Conditions
    if ((block1 == 'X' || block1 == 'x') && (block2 == 'X' || block2 == 'x') && (block3 == 'X' || block3 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } else if ((block4 == 'X' || block4 == 'x') && (block5 == 'X' || block5 == 'x') && (block6 == 'X' || block6 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } else if ((block7 == 'X' || block7 == 'x') && (block8 == 'X' || block8 == 'x') && (block9 == 'X' || block9 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        window.alert('Player X won');
    } else if ((block1 == 'X' || block1 == 'x') && (block4 == 'X' || block4 == 'x') && (block7 == 'X' || block7 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } else if ((block2 == 'X' || block2 == 'x') && (block5 == 'X' || block5 == 'x') && (block8 == 'X' || block8 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } else if ((block3 == 'X' || block3 == 'x') && (block6 == 'X' || block6 == 'x') && (block9 == 'X' || block9 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } else if ((block1 == 'X' || block1 == 'x') && (block5 == 'X' || block5 == 'x') && (block9 == 'X' || block9 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block4").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block7").disabled = true;
        window.alert('Player X won');
    } else if ((block3 == 'X' || block3 == 'x') && (block5 == 'X' || block5 == 'x') && (block7 == 'X' || block7 == 'x')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player X won');
    } 
    // O's start here
    else if ((block1 == 'O' || block1 == 'o') && (block2 == 'O' || block2 == 'o') && (block3 == 'O' || block3 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    } else if ((block4 == 'O' || block4 == 'o') && (block5 == 'O' || block5 == 'o') && (block6 == 'O' || block6 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player X won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    } else if ((block7 == 'O' || block7 == 'o') && (block8 == 'O' || block8 == 'o') && (block9 == 'O' || block9 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        window.alert('Player O won');
    } else if ((block1 == 'O' || block1 == 'o') && (block4 == 'O' || block4 == 'o') && (block7 == 'O' || block7 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    } else if ((block2 == 'O' || block2 == 'o') && (block5 == 'O' || block5 == 'o') && (block8 == 'O' || block8 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    } else if ((block3 == 'O' || block3 == 'o') && (block6 == 'O' || block6 == 'o') && (block9 == 'O' || block9 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block4").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block7").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    } else if ((block1 == 'O' || block1 == 'o') && (block5 == 'O' || block5 == 'o') && (block9 == 'O' || block9 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block2").disabled = true;
        document.getElementById("block3").disabled = true;
        document.getElementById("block4").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block7").disabled = true;
        window.alert('Player O won');
    } else if ((block3 == 'O' || block3 == 'o') && (block5 == 'O' || block5 == 'o') && (block7 == 'O' || block7 == 'o')) {
        document.getElementById('playerTurn') .innerHTML = "Player O won";
        document.getElementById("block1").disabled = true;
        document.getElementById("block2").disabled = true;
        document.getElementById("block6").disabled = true;
        document.getElementById("block5").disabled = true;
        document.getElementById("block8").disabled = true;
        document.getElementById("block9").disabled = true;
        window.alert('Player O won');
    }
    //Tie
    else if ((block1 == 'X' || block1 == 'O') && (block2 == 'X' || block2 == 'O') && (block3 == 'X' || block3 == 'O') && (block4 == 'X' || block4 == 'O') && (block5 == 'X' || block5 == 'O') && (block6 == 'X' || block6 == 'O') && (block7 == 'X' || block7 == 'O') && (block8 == 'X' || block8 == 'O') && (block9 == 'X' || block9 == 'O')) {
        document.getElementById('playerTurn').innerHTML = "Match Tie";
        window.alert('Match Tie');
    } else {
        if (flag == 1) {
            document.getElementById('playerTurn').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('playerTurn').innerHTML = "Player O Turn";
        }
    }
}
//reset game
function resetGame() {
    location.reload();
    document.getElementById('block1').value = '';
    document.getElementById("block2").value = '';
    document.getElementById("block3").value = '';
    document.getElementById("block4").value = '';
    document.getElementById("block5").value = '';
    document.getElementById("block6").value = '';
    document.getElementById("block7").value = '';
    document.getElementById("block8").value = '';
    document.getElementById("block9").value = '';
}