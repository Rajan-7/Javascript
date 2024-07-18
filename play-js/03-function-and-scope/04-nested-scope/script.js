function parent(){
     const xy = 44;
     function child(){
        let xx = 55;
        function grandChild(){
            let x = 7;
            console.log(x + xx + xy)
        }
        // *Child() cann't access the grandchild variables
        // console.log(x);
        grandChild();
     }
    //  *Likewise Parent() cann't access variable of Child()
     child();
}
parent();

// Same goes to the block scope

if(true){
    const x = 9;
    if(1 || x ===9){
        let y = 9;
        console.log(x + y);
    }
    // console.log(y);
}