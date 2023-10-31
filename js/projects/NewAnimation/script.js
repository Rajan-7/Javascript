

const getThermo =()=> {
    const icon = document.getElementById("thermo");
    icon.innerHTML="&#xf2cb";
    icon.style.fontFamily="FontAwesome";

    setTimeout(()=>{
        icon.innerHTML="&#xf2ca";
        icon.style.color="#f8b627";
    },1000)

    setTimeout(()=>{
        icon.innerHTML="&#xf2c9";
    },2000)
    
    setTimeout(()=>{
        icon.innerHTML="&#xf2c8";
    },3000)

    setTimeout(()=>{
        icon.innerHTML="&#xf2c7";
        icon.style.color = "#d63031";
    },4000)
}

getThermo();

setInterval(getThermo,5000);
