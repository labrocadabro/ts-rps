const hands = document.querySelectorAll('.hand') as NodeListOf<HTMLDivElement>;

hands.forEach(hand => hand.addEventListener('click', playerChoose));

function playerChoose(e: Event) {
	const choice = this.cloneNode(true);
	document.getElementById('result')!.append(choice);
}