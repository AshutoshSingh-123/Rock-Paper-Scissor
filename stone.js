function rpsGame(yourChoice) {
  var humanChoice = yourChoice.id;
  var botChoice = chose(botChoses());
  // console.log(humanChoice);
  // console.log(botChoice);

  var result=arrayofWin(humanChoice, botChoice);
//   console.log(result);

frontEnd(result,humanChoice,botChoice);
}



function botChoses() {
  var result = Math.floor(Math.random() * 3);
  return result;
}



function chose(number) {
  var dataBase = ["rock", "scissors", "paper"];
  return dataBase[number];
}




function arrayofWin(humanC,computerC){
var db={'rock':{'rock':0.5,'paper':0,'scissors':1},
  'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
  'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }

};
  return db[humanC][computerC];
}

function frontEnd(mynumber,myC,comC){
var i1=document.createElement('img');
i1.src="./stone.jpg";
var i2=document.createElement('img');
i2.src="./paper.jpg";
var i3=document.createElement('img');
i3.src="./scissor.png";

var i4=document.createElement('img');
i4.src="./stone.jpg";
var i5=document.createElement('img');
i5.src="./paper.jpg";
var c=document.createElement('img');
c.src="./scissor.png";


var msg=document.createElement('h1');
msg.innerHTML='It is a tie!';
var msg2=document.createElement('h1');
msg2.innerHTML='You won!';
var msg3=document.createElement('h1');
msg3.innerHTML='You lose!';

document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

if(mynumber==0.5){
  document.getElementById('d2').appendChild(msg).style ="color:blue;text-align:center;padding-top: 80px;";

}
if(mynumber==1){
  document.getElementById('d2').appendChild(msg2).style ="color:green;text-align: center;padding-top: 80px;";

}
if(mynumber==0){
  document.getElementById('d2').appendChild(msg3).style ="color:red;text-align: center;padding-top: 80px;";

}
if(myC=='rock'){
  document.getElementById('d1').appendChild(i1).style ="box-shadow:0px 10px 10px blue;";
}
if(myC=='paper'){
  document.getElementById('d1').appendChild(i2).style ="box-shadow:0px 10px 10px blue;";
}
if(myC=='scissors'){
  document.getElementById('d1').appendChild(i3).style ="box-shadow:0px 10px 10px blue;";
}
if(comC=='rock'){
  document.getElementById('d3').appendChild(i4).style ="box-shadow:0px 10px 10px red;";
}
if(comC=='paper'){
  document.getElementById('d3').appendChild(i5).style ="box-shadow:0px 10px 10px red;";
}
if(comC=='scissors'){
  document.getElementById('d3').appendChild(c).style ="box-shadow:0px 10px 10px red;";
}


}

