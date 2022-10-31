// expose.js
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const options = document.getElementById('horn-select');
  options.addEventListener('change', (event) => {
    if(event.target.value == "air-horn")
    {
      const audio = document.querySelector('.hidden');
      audio.src = 'assets/audio/air-horn.mp3';
      const image = document.querySelector('#expose > img');
      image.src = 'assets/images/air-horn.svg';
    }
    else if(event.target.value == "car-horn")
    {
      const audio = document.querySelector('.hidden');
      audio.src = 'assets/audio/car-horn.mp3';
      const image = document.querySelector('#expose > img');
      image.src = 'assets/images/car-horn.svg';
    }
    else if(event.target.value == "party-horn")
    {
      const audio = document.querySelector('.hidden');
      audio.src = 'assets/audio/party-horn.mp3';
      const image = document.querySelector('#expose > img');
      image.src = 'assets/images/party-horn.svg';
    }
    // code to run when the event is triggered
  }); 

  const play = document.querySelector('#expose > button');
  play.addEventListener('click', (event) => 
  {
    const audio = document.querySelector('.hidden');
    audio.play();
    if(document.getElementById('horn-select').value == 'party-horn')
    {
      jsConfetti.addConfetti();
    }
  });

  const change = document.querySelector('#volume-controls > input');
  change.addEventListener('change',(event) =>
  {
    var vo = document.querySelector('.hidden');
    vo.volume = event.target.value/100;
    if(event.target.value == 0)
    {
      const image = document.querySelector('#volume-controls > img');
      image.src = 'assets/icons/volume-level-0.svg';
    }
    else if(event.target.value >= 1 && event.target.value < 33)
    {
      const image = document.querySelector('#volume-controls > img');
      image.src = 'assets/icons/volume-level-1.svg';
    }
    else if(event.target.value >= 33 && event.target.value < 67)
    {
      const image = document.querySelector('#volume-controls > img');
      image.src = 'assets/icons/volume-level-2.svg';
    }
    else if(event.target.value >= 67)
    {
      const image = document.querySelector('#volume-controls > img');
      image.src = 'assets/icons/volume-level-3.svg';
    }
  });
       
}
