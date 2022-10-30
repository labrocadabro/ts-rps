var winner = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};
var hands = document.querySelectorAll('.hand');
hands.forEach(function (hand) { return hand.addEventListener('click', playerChoose); });
function playerChoose(e) {
    var playerChoice = this.cloneNode(true);
    var player1 = document.getElementById('player1');
    player1.innerHTML = "<h2>Your Choice</h2>";
    player1.append(playerChoice);
    var computerChoice = hands[Math.floor(Math.random() * 3)];
    var compChoiceClone = computerChoice.cloneNode(true);
    var player2 = document.getElementById('player2');
    player2.innerHTML = "<h2>My Choice</h2>";
    player2.append(compChoiceClone);
    hands.forEach(function (hand) { return hand.removeEventListener('click', playerChoose); });
    var player1Result = playerChoice.id;
    var player2Result = computerChoice.id;
    var showWinner = document.getElementById('winner');
    if (winner[player1Result] === player2Result) {
        showWinner.innerHTML = "<h3>You win!</h3>";
    }
    else if (winner[player2Result] === player1Result) {
        showWinner.innerHTML = "<h3>I win!</h3>";
    }
    else {
        showWinner.innerHTML = "<h3>It's a draw!</h3>";
    }
    document.getElementById('game').style.display = "none";
    var again = document.createElement('button');
    again.id = "again";
    again.innerText = "Play Again";
    again.addEventListener('click', function () { return location.reload(); });
    showWinner.append(again);
}
