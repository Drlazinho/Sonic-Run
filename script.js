const personagem = document.querySelector('#personagem')
const mob = document.querySelector('#mob')


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
      alert('Você perdeu! Tentar novamente?')
    }
}, 10)

document.addEventListener('keyup', handleKeyup)