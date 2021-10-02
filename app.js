// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const inputNoun1 = document.getElementById('input-noun-1');
const spanNoun1 = document.getElementById('noun-1');

const inputNoun2 = document.getElementById('input-noun-2');
const spanNoun2 = document.getElementById('noun-2');

const inputAdjective1 = document.getElementById('input-adjective-1');
const spanAdjective1 = document.getElementById('adjective-1');

const inputBodyPart1 = document.getElementById('input-body-part-1');
const spanBodyPart1 = document.getElementById('body-part-1');

const inputNoun3 = document.getElementById('input-noun-3');
const spanNoun3 = document.getElementById('noun-3');

const inputVerb1 = document.getElementById('input-verb-1');
const spanVerb1 = document.getElementById('verb-1');

const inputAdjective2 = document.getElementById('input-adjective-2');
const spanAdjective2 = document.getElementById('adjective-2');

const inputBodyPart2 = document.getElementById('input-body-part-2');
const spanBodyPart2 = document.getElementById('body-part-2');

const inputNoun4 = document.getElementById('input-noun-4');
const spanNoun4 = document.getElementById('noun-4');

const inputVerb2 = document.getElementById('input-verb-2');
const spanVerb2 = document.getElementById('verb-2');


const hiddenPage = document.getElementById('hidden-page-id');
const submitButton = document.getElementById('submit-button');

const shownPage = document.getElementById('shown-page');
const resetButton = document.getElementById('reset')

const creepyMusic = document.getElementById('creepy-music');


submitButton.addEventListener('click', ()=> {
    spanNoun1.textContent = inputNoun1.value;
    spanNoun2.textContent = inputNoun2.value;
    spanAdjective1.textContent = inputAdjective1.value;
    spanBodyPart1.textContent = inputBodyPart1.value;
    spanNoun3.textContent = inputNoun3.value;
    spanVerb1.textContent = inputVerb1.value;
    spanAdjective2.textContent = inputAdjective2.value;
    spanBodyPart2.textContent = inputBodyPart2.value;
    spanNoun4.textContent = inputNoun4.value;
    spanVerb2.textContent = inputVerb2.value;
    hiddenPage.classList.remove('hidden-page');
    shownPage.classList.add('hidden-page');
    creepyMusic.play();
    document.body.style.backgroundImage = "url('../assets/creepy-kitchen.jpg')";
});

resetButton.addEventListener('click', () => {
    hiddenPage.classList.add('hidden-page');
    shownPage.classList.remove('hidden-page');
    creepyMusic.pause();
    document.body.style.backgroundImage = 'none';
});