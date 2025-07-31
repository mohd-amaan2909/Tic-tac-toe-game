let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msgDraw = document.querySelector(".msg-draw");


let turn0 = true;

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
const disableBox = ()=>{
     for (const box of boxes) {
        box.disabled = true;
     }
};
const enableBox = ()=>{
     for (const box of boxes) {
        box.disabled = false;
        box.innerText= "";
        msgContainer.classList.add("hide");
     }
};
const isDraw = () => {
   let  allFilled = true;

   boxes.forEach((box) =>{
    if(box.innerText == "")
    {allFilled = false;}
   });

   if(allFilled && !isWinner){
    console.log("Draw!");
    document.querySelector(".draw-text").innerText = "It's a Draw!";
    msgDraw.classList.remove("hide");

   }

}

boxes.forEach((box)=>{
    box.addEventListener("click" , () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "#F8E9E9"
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.style.color = "red";
        }
        box.disabled = true;

        checkWinner ();
        isDraw();
    });
});  

const resetBtn= () =>{
    turn0= true;
    enableBox();   
};

newBtn.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);

const checkWinner = () => {
    for (let pattern of winPatterns) {
let  pos1val = boxes[pattern[0]].innerText;
let  pos2val = boxes[pattern[1]].innerText;
let  pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val===pos2val && pos2val === pos3val){
            console.log("winner!", pos1val);
            showWinner (pos1val);
            isWinner=true;
            return;
        }
         
    }
    
    }
};
const showWinner = (winner) =>{
      msg.innerText = `Congratulations, Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBox();
};

