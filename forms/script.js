const fName=document.querySelector('#firstname');
const age=document.querySelector('#age');
const fNameDisplay=document.querySelector('#display-firstname');
const ageDisplay=document.querySelector('#a-hard-truth');

fName.addEventListener('keyup', () => {
    fNameDisplay.innerHTML=fName.value;
})

age.addEventListener('change', () => {
    if(age.value <18) {
        ageDisplay.style.visibility='visible';
    } else {
        ageDisplay.style.visibility="hidden";
    }
})

const password=document.querySelector('#pwd');
const confirm=document.querySelector('#pwd-confirm');
const passwordInfo=createDiv('p',password.parentNode);
passwordInfo.style.color='red';

const confirmInfo=createDiv('p',confirm.parentNode);
confirmInfo.style.color='red';

const button=createDiv('input',confirm.parentNode);
button.type='button';
button.value='Validate';
button.style.visibility='hidden';

password.addEventListener('keyup', () => {
    if(password.value.length < 6) {
        passwordInfo.innerHTML='6 characters minimum';
        password.style.border='solid 1px red';
    } else {
        passwordInfo.innerHTML='';
        password.style.border='solid 1px grey';
    }
})

confirm.addEventListener('keyup', () => {
    if(password.value==confirm.value) {
        button.style.visibility='visible';
        confirm.style.border='solid 1px grey';
    } else {
        button.style.visibility='hidden';
        confirm.style.border='solid 1px red';
    }
})

button.addEventListener('click', () => {
    password.value='';
    confirm.value='';
})

const select=document.querySelector('#toggle-darkmode');

select.addEventListener('change', () => {
    if(select.value=='dark') {
        document.body.style.color='white';
        document.body.style.backgroundColor='black';
    } else {
        document.body.style.color='black';
        document.body.style.backgroundColor='white';
    }
})





//create div
function createDiv(type,parent,content,className) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
}