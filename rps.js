const buttons=document.querySelectorAll('button')

const UserscoreEl=document.getElementById("user-score")
const CompscoreEl=document.getElementById("comp-score")
const Result=document.querySelector("#result")

let Userscore=0;
let Compscore=0;

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const rs=playround(button.id,computerplay())
        // console.log("User Choice!",button.id, "Computer Choice!",
        // computerplay())
        console.log(rs)
        Result.textContent=rs
    })
})

function computerplay(){
    const choices=["rock","papper","scissor"]
    const randomhoices=Math.floor(Math.random()*choices.length)
    console.log(randomhoices)
    return choices[randomhoices]
}

function playround(user,comp){
    if(user===comp){
        return "It's TIE";
    }
    else if(
        (user==="r" && comp==="scissor") ||
        (user==="p" && comp==="rock")||
        (user==="s" && comp==="papper")
    )
    {
        Userscore++;
        UserscoreEl.textContent=Userscore;
        return "You won !! " + user+ " beats " +comp
    }
    else{
        Compscore++;
        CompscoreEl.textContent=Compscore;
        return "You Lose! " + comp + " beats " + user
    }
}