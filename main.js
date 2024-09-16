let userscore =0;
let compscore =0;
const choices = document.querySelectorAll('.choice'); 
const msg = document.querySelector('#msg');
const userscorepara = document.querySelector('#user-score');
const compscorepara = document.querySelector('#comp-score');
const getcompchoice = () => {
    const option = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawgame = () => {
    console.log("game was draw");
};

const showwinner=(userwin)=>{
    if(userwin){
        console.log('You win');
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText ="You Win";
        msg.style.backgroundColor = 'green';
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You loose")
        msg.innerText="You Loose";
        msg.style.backgroundColor = 'red';
    }
}
const playgame = (userchoice) =>{
    console.log("userchoice : ",userchoice);
    //Generate computer choice ->modular
    const comchoice = getcompchoice();
    console.log('computer choice : ',comchoice);

    if(userchoice===comchoice){
        msg.innerText = "Draw";
        msg.style.backgroundColor = '#081b31';
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==='rock'){
            // scissors , paper
            userwin = comchoice==='paper' ? false : true;
        }
        else if(userchoice ==='paper'){
            userwin=comchoice==='scissors'? false : true;
        }
        else{
            userwin = comchoice=='rock' ? false : true;
        }
        showwinner (userwin);
    }
    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice =choice.getAttribute('id');
        playgame(userchoice);
    });
});