//var을 사용할 경우
var sample1=100;
{
    var sample1=200;
}
console.log(sample1);//result:200

//let을 사용할 경우
let sample2=100;
{
    let sample2=200;
}
console.log(sample2);//result:100

console.log(one);
var one=1;

console.log(two);
let two=2;