let firstCard=10
let secondCard=4
let sum = firstCard + secondCard
let hasflyingjat = false
let isAlive = true
let message=""


let messageEl=document.getElementById("message-el")
// here store sum paragraphs
let sumEl=document.querySelector("#sum-el");
function startgame(){
    sumEl=textContent=sum
    if(sum <=20){
        message="Do you want to draw new card😍😍"
    }
    else if(sum ===21){
        message="whoo!! you've got flying jat"
         hasflyingjat=true
    }
    else{
        message="you've got outside in game"
        isAlive=false
    }
    messageEl.textContent=message
}
