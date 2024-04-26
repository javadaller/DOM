const parent=document.querySelector('ul');
const ulArray=Array.from(document.querySelector('ul').children);

const ulChildren=parent.childNodes;
let array=[];

ulChildren.forEach(element => {
    if(element.nodeType===1) {
        if(array.includes(element.innerText)) {
            element.remove();

        } else {

            array.push(element.innerText);

            if(element.innerText=='Fast and Furious') {
                parent.insertBefore(element, parent.firstChild);
                element.classList.add('important');
                element.addEventListener('click', () => {
                    alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
                })

            } else {

                element.addEventListener('click', () => {
                alert(element.innerText);
                })
            }
        }
    }
});

document.body.addEventListener('keyup', (event) => {
    if (event.key === 'r') {
        const elements = Array.from(parent.children);
        const firstElement = elements.shift();
        elements.sort(() => Math.random() - 0.5);
        parent.innerHTML = '';
        parent.appendChild(firstElement);
        elements.forEach(el => parent.appendChild(el));

    } else if(event.key==='d') {
        const firstElement = parent.children[0];
        const clone = firstElement.cloneNode(true);
        parent.appendChild(clone);
    }
});

const newDiv=document.createElement('div');
document.body.insertBefore(newDiv,parent);

const newSelect=document.createElement('select');
newDiv.appendChild(newSelect);

const important=document.createElement('option');
important.value='imporant franchises';
important.innerText='imporant franchises';
newSelect.appendChild(important);

const normal=document.createElement('option');
normal.value='normal franchises';
normal.innerText='normal franchises';
newSelect.appendChild(normal);

newSelect.addEventListener('change', () => {
    ulArray.forEach(element => {
        element.style.visibility='hidden';
    });

    if(newSelect.value=='important franchises') {
        ulArray.forEach(element => {
            if(element.classList.contains('important')) {
                element.style.visibility='visible';
            }
        });
    } else {
        ulArray.forEach(element => {
            if(!element.classList.contains('important')) {
                element.style.visibility='visible';
            }
        });
    }
})

