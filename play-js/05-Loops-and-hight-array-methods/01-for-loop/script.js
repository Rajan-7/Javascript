// for(initialExpression;conditionExpression;incrementExpression){
// statement
// };

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`${i} is the best`);
//   } else {
//     console.log(`Number ${i}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Number ${i}`);
//   for (let j = 1; j <= 7; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

const alphabet = ['a','b','c','d','e'];
for(i = 0;i<alphabet.length;i++){
    if(alphabet[i] === 'e'){
        console.log(`Alphabet ${alphabet[i].toUpperCase()} is best`);
    }else{
        console.log(`${alphabet[i]}`)
    }
}
