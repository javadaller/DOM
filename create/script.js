function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor;
}

function createDiv(type,parent,content,className) {
    const newDiv=document.createElement(type);
    if (type!='') {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
}

const article=document.querySelector('article');
const section=createDiv('section',article,'Arnaud Van Acker');
const color=randomColor();
section.style.backgroundColor=color;

function brightness(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

if(!brightness(color)) {
    section.style.color='white';
}

const body=document.querySelector('body');
const bodyArray=Array.from(body.children);

bodyArray.sort(() => Math.random() - 0.5); 
 
bodyArray.forEach(div => { 
  body.appendChild(div); 
});