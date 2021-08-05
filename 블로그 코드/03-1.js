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

console.log(one);//result:undefined
var one=1;

console.log(two);//result:reference error
let two=2;

//const변수의 특징, 변수의 값이 한번 할당되면 다시 할당될 수 없다.
const num=1;
num=3;//자료형 오류 발생
const str='문자열';
str='다른 문자열';//자료형 오류 발생
const arr=[];
arr=[1,2,3];//자료형 오류 발생
const obj={};
obj={name: '내 이름'};//자료형 오류 발생