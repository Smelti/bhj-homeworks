(() => {  
  let playing = true, 
    activeHole = 1, 
    deadCount = 0,
    lostCount = 0;

  const stop = () => playing = false, 
    getHole = index => document.getElementById(`hole${index}`), 
    deactivateHole = index => 
      getHole( index ).className = 'hole',
    activateHole = index => 
      getHole( index ).className = 'hole hole_has-mole',
        resetGame = () => {
          deadCount = 0;
          lostCount = 0;
          document.getElementById('dead') = deadCount;
          document.getElementById('lost') = lostCount;
          playing = true;
        },
    next = () => setTimeout(() => { 
      if ( !playing ) { 
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next(); 
    }, 800 );
  const holeClick = index => {
    if (playing) {
      if (getHole(index).classList.contains('hole_has-mole')) {
        deadCount++;
        document.getElementById('dead').textContent = deadCount;
      }
      else {
        lostCount++;
        document.getElementById('lost').textContent = lostCount;
      }
      gameOver()
    }
  }
  const gameOver = () => {
    if (lostCount >= 5) {
      stop();
      alert("Вы проиграли!");
    }
    if (deadCount >= 10) {
      stop();
      alert("Победа!")
    }
  }
  
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => holeClick(i))
  }
  next(); 
})();
