//Spread Operator on object
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
var combined = Object.assign({}, objectTwo, objectOne);
var others = Object.assign({}, combined);
delete others.other;

//If I use Spread Operator...
//combined객체를 만들 때 assign을 굳이 사용하지 않아도 된다.
//다른 객체의 attribute로 다른 객체의 것을 사용해야 할 때 편리.
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo,
};
var combined = {
  ...objectTwo,
  ...objectOne,
};
var { other, ...others } = combined; //특정값을 추출할 때는 추출하려는 키 이름을 맞추고
//나머지는 전개연산자로 선언된 변수에 할당할 수 있습니다.
//rest문법이라고도 부른다. 이렇게 하면 other attribute와 그것을 뺀 객체가 만들어진다..
console.log(others);
console.log(other);
