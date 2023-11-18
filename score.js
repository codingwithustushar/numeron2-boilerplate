// Iteration 8: Making scoreboard functional
document.getElementById("score-board").innerText = localStorage.getItem('score')
const play_again = document.getElementById("play-again-button")

play_again.onclick=()=>{
    location.href = 'game.html'
}