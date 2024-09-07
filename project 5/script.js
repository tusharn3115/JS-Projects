// PROJECT 5 --------------------------------------------------------------

// when click on start the color will randomly change and when we click stop the color changing will stop

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeColor, 500);
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;   // dereferencing the inervalId
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);