//ball - мячик на полі
var ball = document.querySelector("#ball");
// point - очки
var point = document.querySelector("#Point");
//lifes - життя
var Lifes = document.querySelector("#Lifes");
//color - колір мячика
var color = ball.style.background;
//startGame - починає гру
var startGame = document.querySelector("#start-game");
//startButton - блок з кнопкою старт
var startButton = document.querySelector("#start-button");
//change - кнопка переміщення і зміни розміру мячика
var change = document.querySelector("#Change");
//timerBlock - таймер гри
var timerBlock = document.querySelector("#timer");
// і - лічильник гри
var i=0;
//при крікі на мячик виконує фонкцію
ball.onclick = function(){
//збільшує рахунок гри на 1
    i=i+1;
    point.innerText = i;

    if (i == 15){
        console.log(i);
        point.innerText = 0;
        i=0;
        alert("ТИ ВИГРАВ ;)");
        ball.style.display = "none";
        point.style.display = "none";
        Lifes.style.display = "none";

        startGame.style.display= "block";
        startButton.innerText= "Хочу ще!";
        clearInterval(clock);
    }

    if (color == "blue"){
        color = ball.style.background = ("yellow");
    } else{
        color = ball.style.background = ("blue");
    }
}

    function start(){
        setTimeout (function(){
        ball.style.display = "block";
        },1000);
        point.style.display = "block";
        Lifes.style.display = "block";

        startGame.style.display= "none";
        timerBlock.innerText = "10";
    }

        var clock = setInterval(function(){
                timerBlock.innerText = timerBlock.innerText - 1;
                if(timerBlock.innerText == 0){
                    console.log(i);
                    clearInterval(clock);
                    alert ("ЧАС ВИЙШОВ!")
        ball.style.display = "none";
        point.style.display = "none";
        Lifes.style.display = "none";

        startGame.style.display= "block";
        startButton.innerText= "Хочу ще!";
    }
},1000);

    startButton.onclick = start;
        clock = true;
change.onclick = function(){
    ball.style.left = ball.offsetLeft + 30 + "px";
    ball.style.width = ball.clientWidth - 10 + "px";
    ball.style.height = ball.clientHeight - 10 + "px";

}
