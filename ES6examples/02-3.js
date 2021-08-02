//ex4(객체 전개 복사와 객체 연결)
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined1 = Object.assign({}, objectOne, objectTwo);
//combined1에는 objectOne과 objectTwo의 속성들이 차례대로 저장된다.
//other의 값은 -1이 된다.
var combined2 = Object.assign({}, objectTwo, objectOne);
//combined2에는 objectTwo와 objectOne의 속성들이 차례대로 저장된다.
//other의 값은 0이 된다.
console.log(combined1);
console.log(combined2);

//ex5
var others=Object.assign({},combined1);
delete others.other;
console.log(others);

