const allcell = document.querySelectorAll(".cell");
const playerO = "O";
const playerX = "X";
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const message = document.getElementById("message");
const text = document.querySelector(".message h2");
const btn = document.querySelector(".message button");
let toggleTurn = true;
allcell.forEach((key) => {
    key.onclick = () => {
        let currentPlayer = toggleTurn ? playerO : playerX;
        key.classList.add("disable");
        addInCell(key, currentPlayer);
        if(winnercheck(currentPlayer)){
            message.style.display="flex";
            text.innerHTML=currentPlayer+" win the game";
        } else if(isDraw()) {
            message.style.display="flex";
            text.innerHTML= "DRAW THE MATCH";
        }else{
            swapPlayer();
        }
    }
});

function swapPlayer() {
    toggleTurn = !toggleTurn;
    if (toggleTurn) {
        player1.classList.add("active");
        player2.classList.remove("active");
    } else {
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

function addInCell(key, currentPlayer) {
    key.innerHTML = currentPlayer;
    key.classList.add(currentPlayer);
}

// function winnercheck(currentPlayer){
//     return WINNING_CONDITIONS.some(condition=>{
//        return condition.every(index=>{
//         return allcell[index].classList.contains(currentPlayer);
//         });
//     });
// }

function isDraw(){
    return [...allcell].every(key=>{
        return key.classList.contains(playerX) || key.classList.contains(playerO);
    })
}
btn.onclick=()=>{
    location.reload();
}

let winnercheck = (currentPlayer)=>{
    return WINNING_CONDITIONS.some(condition=>{
       return condition.every(index=>{
        return allcell[index].classList.contains(currentPlayer);
        });
    });
}