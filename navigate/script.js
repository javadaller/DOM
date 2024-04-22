const ol=document.querySelector('ol');
const olLastChild = document.querySelector('ol li:last-child');

ol.insertBefore(olLastChild,ol.firstChild);

const h2A=document.querySelectorAll('h2')[1];
const h2B=document.querySelectorAll('h2')[2];

const sectionA=document.querySelectorAll('section')[1];
const sectionB=document.querySelectorAll('section')[2];

sectionB.insertBefore(h2A, sectionB.firstChild);
sectionA.insertBefore(h2B, sectionA.firstChild);

sectionB.remove();