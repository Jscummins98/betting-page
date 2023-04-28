const teamArray = Array.from(document.querySelectorAll('.team'))

let currentCell
let team
for (let i = 0; i < teamArray.length; i++) {
  currentCell = teamArray[i]
  team = currentCell.textContent
  if (team === 'Vegas') {
    currentCell.classList.add('winning-team')
  } else if (team === 'test') {
    currentCell.classList.add('losing-team')
  }
}
