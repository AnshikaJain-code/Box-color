const redBtn = document.querySelector('.box-1');

redBtn.addEventListener("click", () => {
    redBtn.style.backgroundColor="red";
})

const blueBtn = document.querySelector('.box-2');

blueBtn.addEventListener("click", () => {
    blueBtn.style.backgroundColor="blue";
})

const greenBtn = document.querySelector('.box-3');

greenBtn.addEventListener("click", () => {
    greenBtn.style.backgroundColor="green";
})

const yellowBtn = document.querySelector('.box-4');

yellowBtn.addEventListener("click", () => {
    yellowBtn.style.backgroundColor="yellow";
})

const input = document.querySelector('.input-content');
const output = document.querySelector('.greet-btn');
const h1 = document.getElementsByTagName('h1')[0];
output.addEventListener('click', () => {
    const name = input.value.trim();

    if (name) {
      greetText.innerText = `Hello, ${name}`;
    } else {
      greetText.innerText = "Hello";
    }
})


