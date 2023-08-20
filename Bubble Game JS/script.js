
let hitnum = 0;
let timerVal = 60;
let score = 0;
function newHit() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitid").textContent = hitnum;
}
function bubbleMaker() {
    let bubble = "";
    for (let i = 0; i <= 215; i++) {
        bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}
function timerClock() {
    let timer = setInterval(function () {
        if (timerVal > 0) {
            timerVal--;
            document.querySelector("#time").textContent = timerVal;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
            document.querySelector("#pbtm").style.color = "#ff4320";
        }
    }, 1000);
}
function scoreIncrement()
{
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function(details){
    let num = Number(details.target.textContent);
    // console.log(num , hitnum);
    if (num === hitnum)
    {
        bubbleMaker();
        scoreIncrement();
        newHit();
    }
})
bubbleMaker();
timerClock();
newHit();