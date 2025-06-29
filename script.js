const keys = document.querySelectorAll('.key');
const note = document.querySelector('.currently-playing');
const hints = document.querySelectorAll('.hints');

// e is the event object
function playSound(e){
    const keyCode = e.key.toUpperCase().charCodeAt(0); // Convert key to ASCII code (same as old keyCode)
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    // keyCode is a built-in property of the keyboard event object returns numerc code representing Alphabet 
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if(!key)return ; // if key isnt mapped ( pressing shift /  space )
    const keyNote = key.getAttribute("data-note");    // get musical note "C" "C#" 
    
    key.classList.add("playing")  // extra new class for css animation
    note.innerHTML = keyNote; //to display curr playing note
    audio.currentTime = 0;  // reset audio to start even on repeat key press 
    audio.play();
}

// remove the playing class when transition ends
function removeTransition(e){

    if(e.propertyName !== "transform") return;

    this.classList.remove("playing"); 
}

keys.forEach(key => key.addEventListener("transitionend" , removeTransition));
// transitionend is a default browser event
// Whenever a CSS transition (like transform, opacity, etc.) finishes, the browser fires a transitionend event on that element.

function hintsOn(e, index){
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}
hints.forEach( hintsOn );

window.addEventListener( "keydown" , playSound );
