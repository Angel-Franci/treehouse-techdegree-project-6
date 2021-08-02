const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const start = document.querySelector('#overlay');
const ul = document.querySelector('ul');
const button = document.getElementsByTagName('button');
const li = document.getElementsByTagName('li');
const tries = document.getElementsByTagName('img');
const main = document.getElementsByClassName('main-container');




const phrases = ['cat in the hat', 'blame it in the boogie', 'just the way you are', 'one last time', 'more than a woman'];

startGame.addEventListener('click', () => {
 start.style.display = 'none';
});

const getRandomPhraseAsArray = arr =>{
    const random = Math.floor(Math.random() * arr.length);
return arr[random].split('');
} 

const phraseArray = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = arr =>{
    for (let i = 0; i < arr.length; i++) {
    var li = document.createElement( 'li' );
    li.textContent = arr[i];
    ul.appendChild( li );   
    if (li.textContent === ' ') {
        li.className = 'space';
            } else {
                li.className = 'letter';
            }
    }
}

addPhraseToDisplay(phraseArray);
console.log(phraseArray);

const lists = document.querySelectorAll('li');

const checkLetter = arr =>{
    let correct = 0;
    for (let i = 0; i < lists.length; i++) {
        if (eve.textContent == lists[i].textContent) {
            li[i].classList.add('show');
            let matched = eve.textContent
            correct++;
        } else if(i == lists.length -1 && correct == 0){
            return null;
        }
    }
    return eve.textContent;
};

let litext = lists.textContent;
const letters = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');

qwerty.addEventListener('click', function (e) {
    eve = e.target;
    let letterFound = checkLetter(button); 
        if (eve.tagName === 'BUTTON' && eve.className === '') {
            eve.className = 'chosen';
            console.log(letterFound);
        }
        if(show.length == letters.length) {
            console.log('winner');
            start.style.display = 'flex';
                start.className = 'win';
                let winner = document.createElement('a');
                winner.textContent = 'You Win!';
                start.appendChild(winner);
                winner.style.color = 'white';
                winner.style.fontSize = '48px';
                startGame.remove();
        }
        if (letterFound == null) {
            tries[missed].src = 'images/lostHeart.png';
            missed += 1;
            console.log(missed);
            } 
            
            if (missed >= 5) {
                console.log('game over');
                let loser = document.createElement('a');
                loser.textContent = 'You Lose!';
                start.style.display = 'flex';
                start.className = 'lose';
                start.appendChild(loser);
                loser.style.color = 'white';
                loser.style.fontSize = '48px';
                startGame.remove();
            }
    });
    console.log(tries);