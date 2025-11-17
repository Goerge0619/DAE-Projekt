const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = ''
  
  if(randomNumber < 1/3){
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper'
  } else if(randomNumber >= 2/3){
    computerMove = 'scissors'
  }

  return computerMove;
}

function playGame(playerMove){
  
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'tie';
    }else if (computerMove === 'paper'){
      result= 'lose';
    }else if (computerMove === 'scissors'){
      result= 'win';
    }
  } 
  else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'win';
    }else if (computerMove === 'paper'){
      result= 'tie';
    }else if (computerMove === 'scissors'){
      result= 'lose';
    }
  }
  else if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'lose';
    }else if (computerMove === 'paper'){
      result= 'win';
    }else if (computerMove === 'scissors'){
      result= 'tie';
    }
  }

  document.querySelector('.js-result').innerHTML = `Result: ${result}`;
  document.querySelector('.js-computerMove').innerHTML = `Computer Move: ${computerMove}`;
  document.querySelector('.js-playerMove').innerHTML = `Your Move: ${playerMove}`; 

  if(result === 'win'){
    score.wins ++;
    document.querySelector('.js-wins').innerHTML = `Wins: ${score.wins}` 
  } else if(result === 'lose'){
    score.losses ++;
    document.querySelector('.js-losses').innerHTML = `Losses: ${score.losses}`
  } else {
    score.ties ++;
    document.querySelector('.js-ties').innerHTML = `Ties: ${score.ties}`
  }

}

function resetScore () {
  score.wins = '';
  document.querySelector('.js-wins').innerHTML = `Wins: ${score.wins}` 

  score.losses = '';
  document.querySelector('.js-losses').innerHTML = `Losses: ${score.losses}`

  score.ties = '';
  document.querySelector('.js-ties').innerHTML = `Ties: ${score.ties}`

  document.querySelector('.js-computerMove').innerHTML = `Computer Move: `;
  document.querySelector('.js-playerMove').innerHTML = `Your Move: `;
}