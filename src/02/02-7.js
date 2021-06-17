//객체 확장 표현식
//객체의 메소드를 정의하는 방법들이 좀 더 간편해졌다.

//예시코드
var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};
combined[`one ${randomKeyString}`] = 'some value';
var ob2 = {
  x: x,
  methodA: function () {
    console.log('methodA');
  },
  methodB: function () {
    console.log('methodB');
  },
};

//객체 확장 표현식을 사용할 경우
var x = 0;
var y = 0;
var obj = { x, y }; //key name과 key value가 일치할 경우 이렇게만 써주면된다.
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value', //어떤 연산결과에 키값을 대입하고 싶다면
  //객체 선언과 동시에 []안에 key name표현식을 작성한다.
};
var obj3 = {
  x,
  methodA() {
    //굳이 function 키워드와 :를 이용해서 메소드를 나타낼 필요가 없다.
    console.log('methodA');
  },
  methodB() {
    return 0;
  },
};
