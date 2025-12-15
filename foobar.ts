const inputStr = process.argv[2]
const inputNum = Number(inputStr)
if (Number.isNaN(inputNum) || inputNum <= 0){
    console.log(`Inavalid Input`);
}
for (let i = 1 ; i <= inputNum; i++){
    if (i % 3 === 0 && i % 7 === 0){
        console.log(`FooBar`);
    } else if (i % 3 === 0){
        console.log(`Foo`);
    } else if (i % 7 === 0){
        console.log(`Bar`);
    } else {
        console.log(i);
    }
}