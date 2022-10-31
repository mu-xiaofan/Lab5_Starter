// explore.js

window.addEventListener('DOMContentLoaded', init);
let output = new SpeechSynthesisUtterance('');
let voices = [];
const se = document.querySelector('#voice-select');
const im = document.querySelector('#explore > img');
const bu = document.querySelector('button');
const me = document.querySelector('#text-to-speak');

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) 
{
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    se.appendChild(option);
  }
}

function speak()
{
  im.src = 'assets/images/smiling-open.png'
  const utterThis = new SpeechSynthesisUtterance(me.value);
  const selectedOption = se.selectedOptions[0].getAttribute('data-name');
  utterThis.onend = function (event) {
    im.src = 'assets/images/smiling.png'
  };
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  speechSynthesis.speak(utterThis);
  me.blur();
}

//function reset()
//{
  //im.src = 'assets/images/smiling.png'
//}
function init() {
  // TODO
  bu.addEventListener('click', speak);
  //output.addEventListener('click',reset);
}
