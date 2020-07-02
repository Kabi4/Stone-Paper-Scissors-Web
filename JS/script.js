const gameArray=["Stone","Paper","Scissors"];

const choiceText = document.querySelector('.heading')
const stn = document.querySelector('#stone');
const ppr = document.querySelector('#paper');
const ssr = document.querySelector('#scissors');
const toberemove =document.querySelector('#scissor');
const playerText =  document.querySelector('.itemsppr');
const computerText = document.querySelector('.itemsstn');
const winText = document.querySelector('.header');
const resetButton=document.querySelector('#reset');

function choicePaper(){
	var randomNumber = Math.floor(Math.random()*3);
		ppr.onclick="";
	stn.onclick="";
	ssr.onclick="";
	choiceText.textContent="You Choose Paper";
	toberemove.parentNode.removeChild(toberemove);
	playerText.textContent="Paper";
	ppr.src="Image/paper.png";
	computerText.textContent=gameArray[randomNumber];
	if (randomNumber===0){
		stn.src="Image/stone.png";
		winText.textContent="You Win";
	}
	else if(randomNumber===1){
		stn.src="Image/paper.png";
		winText.textContent="Draw";
	}
	else if(randomNumber===2){
		stn.src="Image/scissors.png";
		winText.textContent="You Lose";
	}
	resetButton.style.display='block';
}
function choiceStone(){
	var randomNumber = Math.floor(Math.random()*3);
	ppr.onclick="";
	stn.onclick="";
	ssr.onclick="";
	choiceText.textContent="You Choose Stone";
	toberemove.parentNode.removeChild(toberemove);
	playerText.textContent="Stone";
	ppr.src="Image/stone.png" 
	computerText.textContent=gameArray[randomNumber];
	if (randomNumber===0){
		stn.src="Image/stone.png";
		winText.textContent="Draw";
	}
	else if(randomNumber===1){
		stn.src="Image/paper.png";
		winText.textContent="You Lose";
	}
	else if(randomNumber===2){
		stn.src="Image/scissors.png";
		winText.textContent="You Win";
	}
	resetButton.style.display='block';
}
function choiceScissors(){
	var randomNumber = Math.floor(Math.random()*3);
	ppr.onclick="";
	stn.onclick="";
	ssr.onclick="";
	choiceText.textContent="You Choose Scissors";
	toberemove.parentNode.removeChild(toberemove);
	playerText.textContent="Scissors";
	ppr.src="Image/scissors.png";
	computerText.textContent=gameArray[randomNumber];
	if (randomNumber===0){
		stn.src="Image/stone.png";
		winText.textContent="You Lose";
	}
	else if(randomNumber===1){
		stn.src="Image/paper.png";
		winText.textContent="You Win";
	}
	else if(randomNumber===2){
		stn.src="Image/scissors.png";
		winText.textContent="Draw";
	}
	resetButton.style.display='block';
}
