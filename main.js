function toggleCard(card) {
const front = card.querySelector('.front');
const back = card.querySelector('.back');
front.classList.toggle('visible');
back.classList.toggle('visible');
}