import React from 'react';

const CalculateWinner = ({ bulbasaurVote, charmanderVote, squirtleVote }) => {

  let winnerDisplay;
  if (bulbasaurVote === 0 && charmanderVote === 0 && squirtleVote === 0) {
    return "Start voting!";}
  if (bulbasaurVote === charmanderVote && charmanderVote === squirtleVote) {
    winnerDisplay = `It's a tie between Bulbasaur and Charmander and Squirtle with ${bulbasaurVote} votes each!`;
  } else if (bulbasaurVote === charmanderVote && charmanderVote > squirtleVote) {
    winnerDisplay = `It's a tie between Bulbasaur and Charmander with ${bulbasaurVote} votes each!`;
  } else if (bulbasaurVote === squirtleVote && squirtleVote > charmanderVote) {
    winnerDisplay = `It's a tie between Bulbasaur and Squirtle with ${bulbasaurVote} votes each!`;
  } else if (charmanderVote === squirtleVote && squirtleVote > bulbasaurVote) {
    winnerDisplay = `It's a tie between Charmander and Squirtle with ${charmanderVote} votes each!`;
  } else {
    const winner = Math.max(bulbasaurVote, charmanderVote, squirtleVote);
    if (winner === bulbasaurVote) {
      winnerDisplay = `Bulbasaur is in the lead with ${winner} votes!`;
    } else if (winner === charmanderVote) {
      winnerDisplay = `Charmander is in the lead with ${winner} votes!`;
    } else {
      winnerDisplay = `Squirtle is in the lead with ${winner} votes!`;
    }
  }

  return <h2>{winnerDisplay}</h2>;
};

export default CalculateWinner;
