//Asynchronous Function
//알고 있는 개념이긴 한데 잠깐 보고는 지나가자.
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료', 100));
}

function work2(onDone) {
  setTimeout(() => onDone('작업2 완료', 200));
}

function work3(onDone) {
  setTimeout(() => onDone('작업3 완료'), 300);
}

function urgentWork() {
  console.log('긴급 작업');
}

work1(function (msg1) {
  console.log('done after 100ms' + msg1);
  work2(function (msg2) {
    console.log('done after 200ms' + msg2);
    work3(function (msg3) {
      console.log('done after 300ms' + msg3);
    });
  });
});
urgentWork();
//위의 코드는 ES5까지의 문법을 활용한 예시이다.
//비동기 함수를 연달아 처리해야할 때 ES5까지는 콜백함수를 연달아서 쓰는 방법을 사용했다.
//이러한 이유 때문에 콜백지옥에 빠질 우려가 있었다. 그래서 콜백이 계속될 수록 코드가 가독성이 나빠지는 효과가 발생했다.
//또한 함수의 복잡도가 기하급수적으로 늘어날 가능성이 발생했다.
//비동기 함수의 이러한 단점을 해결해준 것이 ES6부터 새로 생긴 Promise라는 객체이다.

//책만으로는 promise를 바로 이해하기가 힘들었다.
//https://joshua1988.github.io/web-development/javascript/promise-for-beginners/ 요 링크를 참고하며 같이 공부했더니 이해가 좀 되었다.
//위에서 작성한 코드는 다음과 같이 바꿀 수 있을 것이다.

//Promise원리:Pending,Fulfilled,Rejected 3가지 상태로 관리
new Promise(function(resolve,reject){//Promise객체 생성자는 내부적으로 resolve와 reject라는 인자를 리턴한다.
  var data=1000;
  resolve();//resolve를 실행하면 Promise가 Fulfilled상태로 변환됨. 반대로 reject를 실행하면 rejected상태로 변환됨.
  //fulfilled상태가 되면 then()을 이용하여 처리 값을 받을 수 있다.
  //더 자세히 말하면 resolve의 인자는 then()의 인자로 넘겨줄 수 있다.
});

//약간응용하면...
function getData(){
  return new Promise(function(resolve,reject){
    var sample='샘플 데이타';
    resolve(sample);
  })
}
getData().then(function(resolvedData){
  console.log(resolvedData);
});

//resolve가 아니라 reject를 사용한다면...
new Promise(function(resolve,reject){
  var mes='Hello Everyone';
  reject(mes);//Promise의 상태는 rejected가 되고 이 때의 인자는 then().catch()의 인자에 들어간다
})

//이번에도 응용을 해본다면
function getData(){
  return new Promise(function(resolve,reject){
    var sample='에러다! 에러!';
    reject(sample);
  })
}

getData().then().catch(function(err){
  console.log(err);
});

//프로미스 쉬운 예제(라고 하지만 arrow function문법이랑 같이 쓰면 아직 헷갈린다...)
const work4=()=>
new Promise((resolve)=>{
  setTimeout(()=>resolve('작업4 완료!'),100);
});

const work5=()=>
new Promise((resolve)=>{
  setTimeout(()=>resolve('작업5 완료!'),300);
});

const work6=()=>
new Promise((resolve)=>{
  setTimeout(()=>resolve('작업6 완료!'),500);
});
work4()
.then(msg4=>{
  console.log(msg4);
  return work5();
})
.then(msg5=>{
  console.log(msg5);
  return work6();
})
.then(msg6=>{
  console.log(msg6);
  console.log('done');
});