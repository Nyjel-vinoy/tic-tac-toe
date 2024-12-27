let ting =new Audio("ting.mp3");
let gameOver =new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;
let box = document.querySelectorAll('.box-text');
let reset = document.querySelector('#restart');


//function to change the turn

const changeTurn=()=>{

    return turn=== "X" ? 0 :"X";
}

const checkWin=()=>{
    
    let wins = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
   wins.forEach(e =>{

        if((box[e[0]].innerHTML === box[e[1]].innerHTML) && (box[e[2]].innerHTML===box[e[1]].innerHTML) && (box[e[0]].innerHTML!==""  )){

            document.querySelector('.info').innerHTML = `${box[0].innerHTML} won`;
            isGameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width='56px'
            
        }
        
    })

}


//gamelogic
    let boxes = document.querySelectorAll(".cells");
    
    Array.from(boxes).forEach(e=> {

        let boxtext = e.querySelector('.box-text');
        e.addEventListener("click",()=>{

            if(boxtext.innerHTML===''){
                boxtext.innerHTML = turn;
                
                turn = changeTurn();
                ting.play();
                checkWin();
                if(!isGameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;

                }

                
                
            }
        })
    })
    // reset button
    reset.addEventListener('click',()=>{

        Array.from(box).forEach(e =>{
            e.innerHTML="";
        })

        turn = "X";
        isGameover=false;
        document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width='0'
        })



   
    



