const generateTemp =()=>{
    const tempValue = document.getElementById('value').value;

    const selectedTemp = document.getElementById('tempValue');
    const selectedOne = selectedTemp.value;
    console.log(selectedOne);
    
    const celToFah =(celValue)=>{
        let fahrenheit = Math.round((celValue*9/5)+32);
        return fahrenheit;
    }

    const fahToCel =(fah)=>{
        let celsius = Math.round((fah-32)*5/9);
        return celsius;
    }
    let  res;
    if(selectedOne == 'cel'){
        res = celToFah(tempValue);
        document.getElementById('result').innerHTML=`${res}℉`;
        console.log(res);
    }else{
        res = fahToCel(tempValue);
        document.getElementById('result').innerHTML=`${res}℃`;
    }
}
