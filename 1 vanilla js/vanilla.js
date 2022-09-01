//The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first)

//The const declaration creates a read-only reference to a value. It does not mean the value it holds is
// immutable—just that the variable identifier cannot be reassigned

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade'); 
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;

}