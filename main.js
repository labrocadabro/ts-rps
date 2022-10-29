var hands = document.querySelectorAll('.hand');
hands.forEach(function (hand) { return hand.addEventListener('click', playerChoose); });
function playerChoose(e) {
    var choice = this.cloneNode(true);
    document.getElementById('result').append(choice);
}
