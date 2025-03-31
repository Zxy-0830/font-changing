'use strict';

const heading = document.getElementById('heading');
const remind = document.getElementById('remindhere');
const uppercase = document.getElementById('uppercase');
const select = document.getElementById('selecthere');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const bold = document.getElementById('bold');

function upcase() {
  buttonfunction();
  if(heading.textContent === heading.textContent.toUpperCase()) {
    heading.textContent = heading.textContent.toLowerCase()
    uppercase.innerText = 'uppercase';
  } else if (heading.textContent === heading.textContent.toLowerCase()) {
    heading.textContent = heading.textContent.toUpperCase()
    uppercase.innerText = 'lowercase';
  }
}

uppercase.addEventListener('click', ()=>{
  upcase();
});

function getbold() {
  buttonfunction();
  if(window.getComputedStyle(heading).fontWeight === "400" ) {
    heading.style.fontWeight = 'bolder'
    bold.innerText = 'unbold';
  } else if( window.getComputedStyle(heading).fontWeight === "700" ) {
    heading.style.fontWeight = 'normal'
    bold.innerText = 'bold';
  }
}

bold.addEventListener('click', ()=>{
  getbold();
});
  
const minSize = 20;
const maxSize = 100;
let currentSize = 50;

function crase() {
  if(currentSize < maxSize) {
    buttonfunction();
    currentSize += 5;
    heading.style.fontSize = currentSize + 'px';
  } else {
    remind.innerText = 'you have reached the maxmium fontsize';
    increase.disabled = true;
  }
}

increase.addEventListener('click', ()=>{
  crase();
});

function decrase() {
  if(currentSize > minSize) {
    buttonfunction();
    currentSize -= 5;
    heading.style.fontSize = currentSize + 'px';
  } else {
    remind.innerText = 'you have reached the minmium fontsize';
    decrease.disabled = true;
  }
}

decrease.addEventListener('click', ()=>{
  decrase();
});

function buttonfunction() {
  remind.innerText = '';
  increase.disabled = false;
  decrease.disabled = false;
}

selecthere.addEventListener('change', ()=>{
  heading.style.fontFamily = selecthere.value;
});

function redo() {
  buttonfunction();
  heading.style.fontFamily = 'Arial, Helvetica, sans-serif';
  heading.style.fontSize = '50px';
  heading.style.fontWeight = 'normal';
  heading.textContent = heading.textContent.toLowerCase();
  selecthere.selectedIndex = 0;
}

reset.addEventListener('click', ()=>{
  redo();
});