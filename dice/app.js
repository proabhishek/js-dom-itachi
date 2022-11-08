playerName = document.querySelectorAll("input")
playButton = document.querySelectorAll(".play")
winnerButton = document.querySelector(".final")
score = document.querySelectorAll("span")
output = document.querySelector(".output")
for(let t of playButton){
   t.addEventListener("click", dicePlay)
}

function dicePlay(e){
    e.target.disabled = true
    let btn = e.target.id - 1
    let arr = [1,2,3,4,5,6]
    //  let random = 5
    // while(random == 5){
      random = parseInt(Math.random() * arr.length)
    // }
    let result = arr[random]
    score[btn].innerHTML = result

}

winnerButton.addEventListener("click", winner)

function winner(){
    let max= -1, pos = []
    for(let i = 0; i<=score.length-1; i++){
         let s = +(score[i].innerText)
        //  console.log(score[i].innerText)
          if(s>max){
                max = s 
          }
        
    }
    for(let i = 0; i<=score.length-1; i++){
        let s = +(score[i].innerText)
       //  console.log(score[i].innerText)
         if(s == max){
                pos.push(i)
         }
       
   }
      let names = ""
   for(let i = 0; i<=pos.length-1; i++){
    
     names =  names + playerName[pos[i]].value + ","
   
}
    output.innerHTML = names.slice(0,names.length-1) + " won the game"
    
}
