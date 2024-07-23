let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgameBtn = document.querySelector("#newgame");
let newgameBtn2 = document.querySelector("#newgame2");
let msgContainer = document.querySelector(".msg-container");
let msgContainer2 = document.querySelector(".msg-container2");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () =>{

        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.classList.add("box-X")
            box.classList.remove("box-O")
            
        }else{
            box.innerText = "X";
            turnO = true;
            box.classList.add("box-O")
            box.classList.remove("box-X")
        }
        box.disabled = true;
        winnerCheck();
        count++;    
        checkDraw();   
    });
});


const checkDraw = () => {
    if (count === 9){
    msgContainer2.classList.remove("hide");
    }
}


const winnerCheck = () => {

    
    for (let pattern of winPatterns) {

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            
            if(posVal1 === posVal2 && posVal2 === posVal3){
                    disabledBoxes();
                    showWinner(posVal1);

                    }
        }
        
        }
    }

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `${winner}`
    msgContainer.classList.remove("hide");
    if (turnO) {
        msg.classList.add("box-O")
        msg.classList.remove("box-X")
    }else{
        msg.classList.add("box-X")
        msg.classList.remove("box-O")
    }
 }

//  const reset = () => {
//     for (let box of boxes) {
//         box.innerText = ""; 
//         box.disabled = false;
//     } 
//     msgContainer.classList.add("hide");
// }

resetBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""; 
        box.disabled = false;
    } 
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide");
    count = 0;
});

newgameBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""; 
        box.disabled = false;
        
    } 
    msgContainer2.classList.add("hide");
    msgContainer.classList.add("hide");
    count = 0;
});

newgameBtn2.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = ""; 
        box.disabled = false;
        
    } 
    msgContainer2.classList.add("hide");
    msgContainer.classList.add("hide");
    count = 0;
});