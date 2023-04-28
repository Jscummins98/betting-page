const teamArray = Array.from(document.querySelectorAll('.team'))

let currentCell
for (let i = 0; i < teamArray.length; i++) {
  currentCell = teamArray[i]
  if (currentCell.textContent === 'test') {
    currentCell.classList.add('winning-team')
  } else if (currentCell.textContent === 'test') {
    currentCell.classList.add('losing-team')
  }
}
