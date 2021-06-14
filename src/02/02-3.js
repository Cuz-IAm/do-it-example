//p43 spread opreator
//나열형 자료를 하나씩 추출하거나 연결할 때 사용한다. 배열을 인수리스트로 바꾸어준다.
//배열,객체나 변수명 앞에 마침표 3개를 입력한다. 인자 표현식 안에서만 사용할 수 있다.
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array[1]]; //combined배열 정의
var combined = array1.concat(array2); //array1에 array2 배열을 덧붙임
var combined = [].concat(array1, array2); //array1과 array2를 붙임
//어쨋든 combined에는 one two three four가 저장되어있음. 배열이 여러개일 경우,하나의 배열로 통일하려면 concat도 여러번
//해야한다는 단점이 있었다.
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty'; //처음 배우는건데 추출배열이 없을 때 가져올 기본값을 설정하는 법이라고함.

function func() {
  var args = Array.prototype.slice.call(arguments); //call은 this와 인수목록을 동시에 가져올 수 있음
  var first = args[0];
  var others = args.slice(1, args.length);
}

//Spread Operator 활용 시.
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2]; //이러면 각각의 배열의 원소가 저어어언부 들어간다. 아주 간편하다!
const [first, second, three = 'empty', ...others] = array1; //배열의 원소에 이런식으로도 이름을 붙여줄 수 있네. 몰랐음.
function func(...args) {
  var [first, ...others] = args;
}
