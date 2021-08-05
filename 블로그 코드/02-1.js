//ES5 기반 코드. 박호준님의 '리액트 프로그래밍 정석'을 참고하였습니다.
//ex1(배열 전개 복사와 배열 연결)
var array1=['one','two'];
var array2=['three','four'];
var combined1=[array1[0],array1[1],array2[0],array2[1]];
var combined2=array1.concat(array2);
var combined3=[].concat(array1,array2);
console.log('ex1:',combined1,combined2,combined3);

//ex2(배열을 전개하여 함수의 인수로 사용)
function myFunction(x, y, z) { console.log('ex2:',x,y,z)};
var args = [0, 1, 2];
myFunction.apply(null, args);

//ex3(나머지 인자를 한 곳에 저장하는 배열 생성)
var a=7,b=4,c=8,d=6;
function func(){
    var args=Array.prototype.slice.call(arguments);//args에 배열 형태로 인자들이 저장됨
    var first=args[0];//첫 번째 인자는 first에 저장
    var others=args.slice(1,args.length);//나머지 인자들은 others 배열에 저장.
    console.log('ex3:',first,others);
}
func(a,b,c,d);

//homework1(구조 분해 할당과 rest parameter)
var array1=['one','two'];
var [first,second,third='empty',...others]=array1;

//homework2(2차원 배열 전개)
var array1=['one','two',['three','four']];
console.log(...array1);

//homework3(합쳤더니 2차원 배열?)
var array1=['one','two'];
var array2=['three','four','five','six'];
array1.push(array2);
console.log(array1);


