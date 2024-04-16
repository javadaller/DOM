const title=document.querySelector('title');
console.log(title.innerHTML);

const newTitle='Modifying the DOM';
title.innerHTML=newTitle;

//document.querySelector('body').style.backgroundColor='#FF69B4';
const randomColor = Math.floor(Math.random()*16777215).toString(16);
document.querySelector('body').style.backgroundColor='#'+randomColor;

const children=document.querySelector('html').children;
const secondChild=children[1];
const childrenToDisplay=secondChild.children;
const length=childrenToDisplay.length;

for(let i=0; i<length; i++) {
    console.log(childrenToDisplay[i]);
}