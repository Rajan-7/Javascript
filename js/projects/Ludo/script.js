
const RollDice = () =>{
    let val1 = Math.floor(Math.random()*6)+1;
    let play1Dice = `image/dice${val1}.jpg`;
    document.getElementById('dice1').setAttribute('src',play1Dice);

    let val2 = Math.floor(Math.random()*6)+1;
    let play2Dice = `image/dice${val2}.jpg`;
    document.getElementById('dice2').setAttribute('src',play2Dice);

    if(val1 > val2){
        document.querySelector('h1').innerHTML="PLAYEr1 WON :)"
    }
    if(val2 > val1){
        document.querySelector('h1').innerHTML="PLAYEr2 WON :)"
    }
    if(val1 == val2){
        document.querySelector('h1').innerHTML="DRaw :)"
    }
}