// const aKey = element.querySelector(1)
// const sKey = element.querySelector(2)
// const dKey = element.querySelector(3)
// const fKey = element.querySelector(4)
// const gKey = element.querySelector(5)
// const hKey = element.querySelector(6)
// const jKey = element.querySelector(7)
// const kKey = element.querySelector(8)
// const lKey = element.querySelector(9)

// function snare() {
//   let snare = new Audio("../sounds/snare.wav")
//   snare.play()
// }

// document.addEventListener('keydown', function(e) {
//   if ( e.key == '65')
//     snare()
// })

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return; // stops the function if there is no audio with the key
  audio.currentTime = 0 //rewinds the audio to the start before playing it
  audio.play();
  key.classList.add('playing')
});

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip if not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

