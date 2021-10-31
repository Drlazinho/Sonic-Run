const personagem = document.querySelector('#personagem')
const mob = document.querySelector('#mob')
let ponts = document.querySelector('.ponts')

const somJump = new Audio();
somJump.src = './assets/sonicspinner.wav'

let isJumping = false;

function handleKeyup(event) {
  if (event.keyCode === 32) {
    if(!isJumping){
      somJump.play()
      jump()
    };
  }
}

function refreshPage(){
  window.location.reload();
}

function jump(){
  isJumping = true;
  if(personagem.classList != 'animationJump'){
    personagem.classList.add('animationJump')
  }
  setTimeout(() => {
    isJumping = false
    personagem.classList.remove('animationJump')
  }, 750)
}

var blackout = setInterval(() => {

  var bottomPersonagem = parseInt(
    window.getComputedStyle(personagem).getPropertyValue('bottom')
  )
  var tocMob = parseInt(
    window.getComputedStyle(mob).getPropertyValue('left')
    )
    if(tocMob < -10 && tocMob > -30 && bottomPersonagem <= -400 ) {
      document.body.innerHTML = `<div class="modal-game-over"><h1>Game Over</h1><button class="play-again" type="submit" onClick="refreshPage()">Play Again</button></div>`
    } 
}, 10)



document.addEventListener('keyup', handleKeyup)