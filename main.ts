const winner = {
	"rock": "scissors",
	"scissors": "paper",
	"paper": "rock"
}

const hands = document.querySelectorAll('.hand') as NodeListOf<HTMLDivElement>;

hands.forEach(hand => hand.addEventListener('click', playerChoose));

function playerChoose(e: Event) {
	const playerChoice = this.cloneNode(true);
	const player1 = document.getElementById('player1')!;
	player1.innerHTML = "<h2>Your Choice</h2>";
	player1.append(playerChoice);
	const computerChoice = hands[Math.floor(Math.random() * 3)];
	const compChoiceClone = computerChoice.cloneNode(true);
	const player2 = document.getElementById('player2')!;
	player2.innerHTML = "<h2>My Choice</h2>";
	player2.append(compChoiceClone);
	hands.forEach(hand => hand.removeEventListener('click', playerChoose));
	const player1Result = playerChoice.id;
	const player2Result = computerChoice.id;
	const showWinner = document.getElementById('winner')!;
	if (winner[player1Result] === player2Result) {
		showWinner.innerHTML = "<h3>You win!</h3>";
	} else if (winner[player2Result] === player1Result) {
		showWinner.innerHTML = "<h3>I win!</h3>";
	} else {
		showWinner.innerHTML = "<h3>It's a draw!</h3>";
	}
	document.getElementById('game')!.style.display = "none";
	const again = document.createElement('button');
	again.id = "again";
	again.innerText = "Play Again";
	again.addEventListener('click', () => location.reload());
	showWinner.append(again);
}