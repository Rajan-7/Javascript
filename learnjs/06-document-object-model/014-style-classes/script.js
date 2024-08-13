const para = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const item = itemList.querySelectorAll('li');

function run(){
    // console.log('Hello !!')

    // *className
    // console.log(itemList.className);
    // para.className = 'card dark';


    // *classList
    // console.log(itemList.classList);
    // itemList.classList.forEach(c => console.log(c));
    // para.classList.add('dark');

    // *toggle
    // para.classList.toggle('dark');
    // para.classList.toggle('hidden');

    // *replace(huney,garney)
    // para.classList.replace('card','dark');

    // Changing style directly
    // itemList.style.lineHeight = '2';
    item.forEach((item,index)=>{
        item.style.color = "bluE";
        if(index === 3){
            item.style.color = 'green';
        }
    })
}

document.querySelector('button').onclick = run;