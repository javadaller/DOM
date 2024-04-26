function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor;
}

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

function brightness(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;

    return brightness > 150;
}

const learners=["Adrien B.", "Adrien C.", "Angel", "Arnaud", "Caroline", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Isabelle", "Jessica", "Jordan", "Julie", "Justine", "Iliess", "Ludovic", "Lyne", "Manu", "Maryann", "Mohamed", "Natalia", "Nathanael", "Stacy", "Tom", "Youris", "Zahra"];
const article=document.querySelector('article');

learners.sort(() => Math.random() - 0.5);

function test() {
  for(let i=0; i<learners.length; i++) {
    const section=createDiv('section',article,learners[i]);
      const color=randomColor();
      section.style.backgroundColor=color;
      if(!brightness(color)) {
          section.style.color='white';
      }
  }
}

test();

