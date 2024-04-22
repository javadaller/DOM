let timer = 0;
const log=document.querySelector('ul');
const display=document.querySelector('.displayedsquare-wrapper');
const squares=Array.from(document.querySelector('.actionsquare-wrapper').children);

//square click
squares.forEach(square => {
    square.addEventListener('click', function() {
        const color=square.classList[1];
        createSquare(color);
        createLog('['+(timer/1000).toFixed(2)+'s] Created a new '+color+' square');
    })
});

//delete square
document.addEventListener('keyup', function(event) {
    if (event.key === 's') {
      const displayChildren = Array.from(display.children);
      displayChildren.forEach(square => {
        square.remove();
      });
    }
});

//change body color
document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
      document.body.style.backgroundColor = randomColor();
      createLog('['+(timer/1000).toFixed(2)+'s] Created a new background color');
    }
});

//delete log
document.addEventListener('keyup', function(event) {
    if (event.key === 'l') {
      const ulChildren = Array.from(document.querySelector('ul').children);
      ulChildren.forEach(li => {
        li.remove();
      });
    }
});

function createSquare(color) {
    const newDiv=document.createElement('div');
    newDiv.classList.add('displayedsquare',color);
    display.appendChild(newDiv);
    newDiv.addEventListener('click', function() {
        alert(color);
    })
}

function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor;
}

function createLog(content) {
    const newDiv=document.createElement('li');
    newDiv.innerHTML=content;
    log.appendChild(newDiv);
    timer=0;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function timerLoop() {
    while(true) {
        timer+=100;
        await sleep(100);
    }
}
timerLoop()