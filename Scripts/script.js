let randomNumber1=Math.floor(Math.random()*6)+1;
let randomDiceImage = "Resource/dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage)

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomDiceImage2 = "Resource/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 won "
}
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player2 won🚩"
else
    document.querySelector("h1").innerHTML="DRAW"
