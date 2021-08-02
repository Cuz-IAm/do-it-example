//ES6 전개 연산자를 이용한 코드.
//ex1(배열 전개 복사와 배열 연결)
var array1=['one','two'];
var array2=['three','four'];
var combined=[...array1,...array2];
console.log("ex1:",combined);

//ex2(배열을 전개하여 함수의 인수로 사용)
function myFunction(x,y,z){console.log('ex2:',x,y,z);};
var args=[0,1,2];
myFunction(...args);

//ex3(Rest Parameter 문법+구조 분해 할당)
var a=7,b=4,c=8,d=6;
function func(...args){//args는 rest parameter가 되어 func함수의 모든 인자들이 저장된다.
    var [first,...others]=args;//others는 rest parameter가 되어 first를 제외한 모든 인자들이 저장된다.
    console.log('ex3:',first,others);
}
func(a,b,c,d);