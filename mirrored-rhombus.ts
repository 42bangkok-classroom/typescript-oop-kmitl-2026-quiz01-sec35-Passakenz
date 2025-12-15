const inputStr = process.argv[2]
const inputNum = Number(inputStr)

if (Number.isNaN(inputNum) || inputNum <= 0){
    console.log(`Invalid Input`);
}
for (let i = 0; i < inputNum; i++){
    let result = '';
    for (let j = inputNum - i - 1; j > 0; --j ){
        result += ' '
    }
    for (let k = 0; k < inputNum; k++){
        result +='*'
    } 
    console.log(result)
}