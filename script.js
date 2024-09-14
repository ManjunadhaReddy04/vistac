let boxes=  document.querySelectorAll(".box");
let resetbutton=  document.querySelector("#reset");
let winner= document.querySelector("#winner");

 

 let turn0=true;
 const winningPattern=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,6],
    [6,7,8],

 ];
let count=0;
 
 boxes.forEach(add);
 function add(box){
    box.addEventListener("click", inntext);
    function inntext(){
        
        if (!box.classList.contains("disabled")){
        if(turn0===true){
        box.innerText="x";
        turn0=false;
        
        }
        else{
            box.innerText="o";
            turn0=true;
        }
        box.classList.add("disabled");
        count++;
        
        checkwinner();
    }
}


 };


 function  checkwinner(){
    for(let pattern of winningPattern){
           let  pattern1 =boxes[pattern[0]].innerText;
           let  pattern2 = boxes[pattern[1]].innerText;
           let  pattern3 =boxes[pattern[2]].innerText;
           if (pattern1!==""&&pattern1===pattern2&&pattern2===pattern3){
              
               showwinner(pattern1);
               return;
           }
    }
    if (count === 9) {
        winner.innerText = "It's a Draw!";
        disableAllBox();

    }
   
 }

 function disableAllBox(){
    for ( let box of boxes){
    box.classList.add("disabled");
   }
 };
 function showwinner(pattern1){
    winner.innerText="winner is  " + pattern1;
     disableAllBox();
     
 }


 resetbutton.addEventListener("click", resetGame);

 function resetGame(){
    boxes.forEach(mybox);
    function mybox(box){
      box.innerText="";
      box.classList.remove("disabled");
    }
    winner.innerText = "";
    turn0 = true; 
    count = 0; 
};
