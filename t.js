let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset_btn");
let new_btn=document.querySelector(".new_btn");
let msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg_container");
let turno=true;
let cnt=0;

const winners_list=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset_game=()=>{
    turno=true;
    cnt=0;
    enable_boxes();
    msg_container.classList.add("hide");
    msg.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        cnt++;
        let isWinner=check_winner();
        if(cnt===9 && !isWinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
   msg.innerText =`Game was a draw.`;
   msg_container.classList.remove("hide");
   disable_boxes();
};
const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enable_boxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const show_Winner=(winner)=>{
    msg.innerText=`Congratulations ,${winner} is winner`;
    msg_container.classList.remove("hide");
    disable_boxes();

};
const check_winner=()=>{
    for(let winner of winners_list){
        let p1=boxes[winner[0]].innerText;
        let p2=boxes[winner[1]].innerText;
        let p3=boxes[winner[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                show_Winner(p1);
                return true;
            }
        }
        

    }
};
new_btn.addEventListener("click",reset_game);
reset_btn.addEventListener("click",reset_game);