const importantArray=document.querySelectorAll('.important');
importantArray.forEach(element => {
    element.setAttribute('title','This is an important item');
});

const imgArray=document.querySelectorAll('img');
imgArray.forEach(element => {
    if(!element.classList.contains("important")) {
        element.style.display="none";
    }
});

const pArray=document.querySelectorAll('p');
pArray.forEach(element => {
    if(element.classList.length==0) {
        console.log(element.innerText);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.color='#'+randomColor;
    } else {
        console.log(element.innerText+' with class:'+element.classList);
    }
});
