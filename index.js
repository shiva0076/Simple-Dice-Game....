let random1 = Math.floor((Math.random()*6)+1);
let random2 = Math.floor((Math.random()*6)+1);

let randomdiceimage1 = "dice"+random1+".png";
let randomimage1 = "images/"+randomdiceimage1;

let randomdiceimage2 = "dice"+random2+".png";
let randomimage2 = "images/"+randomdiceimage2;

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(random1 > random2){
  document.querySelector("h1").innerHTML = "Player 1 wins!!" ;
}
else if(random1 === random2)
{
  document.querySelector("h1").innerHTML=  "Draw!!";
}
else
  document.querySelector("h1").innerHTML = "Player 2 wins!!" ;
