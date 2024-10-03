console.log('Welcome to The Game ')

let turn='x'
let gameover=false
let clickx=1
let clicky=0


//function for changing turn 
function changeTurn(){
    turn=turn==='x'?'o':'x'
    if(turn==='x')
    {
    document.querySelector('.msginfo').innerText='This turn For X'
    clickx+=1
    }
    else
    {
    document.querySelector('.msginfo').innerText='This turn For 0'
    clicky+=1
    }
    return turn
}

// function for check win

function checkwin()
{
const boxtext=document.getElementsByClassName('boxtext')
const winpair=[[0,1,2,0,0,-1],[3,4,5,0,0,9],[6,7,8,0,0,19],[0,3,6,90,10,10],[1,4,7,90,10,0],[2,5,8,90,10,-10],[0,4,8,45,7,6],[6,4,2,135,7,-6.5]]

winpair.forEach((e)=>
{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)  && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)  && boxtext[e[0]].innerText !== '')
    {
        if(turn ==='x')
        document.querySelector('.winmsg').innerText=` ${turn}  Won the match     in ${clickx} round`  
        else
        document.querySelector('.winmsg').innerText=` ${turn}  Won the match  in ${clicky} round`  
        const wnmsg=setTimeout(winhandle,1600)
        function winhandle(){
        document.querySelector('.winmsg').style.width='40vw'
        document.querySelector('.gamecontainer').style.opacity='30%'
        document.querySelector('.winmsg').style.opacity='100%';
        document.querySelector('.winmsg').style.zIndex=20;
        // document.getElementById('gif').style.width='15em'
        // document.getElementById('gif').style.height='15em'
    }
        document.querySelector('#line').style.transform=`rotate(${e[3]}deg) translate(${e[4]}em,${e[5]}em)`
         document.querySelector('#line').style.width='28em'
      
        gameover=true
    }
})
}

// Logic of the game 

const boxes=Array.from(document.getElementsByClassName('box'))
boxes.forEach(element=>{
     let boxtext=element.querySelector('.boxtext')
     if(!gameover){
        element.addEventListener('click',()=>{
            if(boxtext.innerText === '' && !gameover)
            {
             boxtext.innerText = turn;
             checkwin()  
             if(!gameover)
             turn=changeTurn()
           }
            

         })
     }
    
})


