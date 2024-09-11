var userName = prompt("Hi. Please enter your name");
alert("Welcome "+userName+" this game is haram it is kinda depending on luck in other words qomar");

document.querySelector(".start").addEventListener('click',function (){
    playgame();
});

function playgame(){
    var playerOne = Math.floor((Math.random()*6)+1);
    var playerTwo = Math.floor((Math.random()*6)+1);

    console.log(playerOne);
    console.log(playerTwo);

    document.querySelector(".dic1").setAttribute("src", "images/dice"+playerOne+".png");
    document.querySelector(".dic2").src = "images/dice"+playerTwo+".png";

    if (playerOne > playerTwo) {
        document.querySelector(".start").innerHTML = "<h1>Player 1 win 🚩</h1>";
    }
    else if (playerOne < playerTwo){
        document.querySelector(".start").innerHTML = "<h1>Player 2 win 🚩</h1>";
    }
    else{
        document.querySelector(".start").innerHTML = "<h1>even try again</h1>";
    }
}