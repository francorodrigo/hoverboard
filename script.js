
const container = document.getElementById('container');
colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const boxes = 500;

for (let index = 0; index < boxes; index++) {
  const box = document.createElement('div');
  box.classList.add('box');

    box.addEventListener('mouseover',() =>setColor(box));
    box.addEventListener('mouseout',() =>removeColor(box));
    container.appendChild(box);
}

function setColor(box){
    const color = getRandomColor();
    box.style.background = color;
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(box){
    box.style.background = '#1d1d1d';
    box.style.boxShadow = '0 0 2px #000';
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}
// const boxes = document.querySelectorAll('.box');
// console.log("BOXES",boxes);

// boxes.forEach(box =>{
//     box.addEventListener('mouseover',() =>{
//         const opacity = 100;
//         const interval = setInterval(blurring(box), 30);
//         if(opacity == 0)
//             clearInterval();

//         box.style.bg
    

//     })
// })

// function blurring(box){
//     opacity--;
//     if(opacity<=0)
//     clearInterval(interval);

//     box.style.opacity = scale(load,0,100,1,0);

// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//   }