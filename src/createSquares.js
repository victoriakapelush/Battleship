function createSquares () {
  const player = document.getElementById('player')
  const opponent = document.getElementById('opponent')

  for (let i = 0; i < 10 * 10; i++) {
    const square = document.createElement('div')
    player.appendChild(square)
    square.setAttribute('id', 'square')
    square.style.border = '1px solid black'
  }

  for (let j = 0; j < 10 * 10; j++) {
    const square = document.createElement('div')
    opponent.appendChild(square)
    square.setAttribute('id', 'square')
    square.style.border = '1px solid black'
  }
}

export default createSquares
