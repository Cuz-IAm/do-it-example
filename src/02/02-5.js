//Arrow Function
//Arrow function은 함수표현식을 대체하는 방법으로 사용할 수 있다.
//매우 직관적인 것이 특징이다.

//함수를 선언하는 기존의 두 가지 방법
var add = function (first, second) {
  //함수 표현식,hoisting
  return first + second;
};

function add(first, second) {
  //함수 정의
  return first + second;
}

//arrow function을 활용할 시에
var add = (first, second) => {
  return first + second;
};
//바로 결과값을 반환하고 싶다면 중괄호와 return을 생략해도 된다. 만약 인자가 하나라면 소괄호도 생략가능하다.
var add = (first, second) => first + second;
//반환값이 객체라면 괄호로 감싸준다.
var addAndMultiply = (first, second) => ({ add: first + second, multiply: first * second });

//화살표 함수의 장점은 함수표현식은 간결하게 하는 것과 계단형 함수 선언을 방지할 수 있다는 것.
//ex)
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
//위 코드는 return 값이 꼬리를 물고 이어지는데 이 구조가 깊어질 수록 코드를 독해하기가 힘들어진다.
//따라서 화살표 함수를 표현하여 다음과 같이 바꾸는게 좋다.
var addNumber = (num) => (value) => num + value; //코드가 매우 간결해졌다.

//this binding에도 유용하다.
class myClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
