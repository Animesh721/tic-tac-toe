let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");

let turnO = true;

const winPatterns = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
];

const resetGame = () =>{
    turn0=true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val!="" && pos2Val!="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            disableBoxes();
        }
    }
}
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
resetBtn.addEventListener("click", resetGame);