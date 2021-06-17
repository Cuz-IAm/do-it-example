//배열 함수에 대해서 배워본다
//자주 사용하는 함수인 forEach(),map(),reduce()함수에 대해서 알아본다.
//지금 만들어볼 예시는 querystring에서 &을 기준으로 데이터를 분리하여 객체에 담아 반환하는
//parsing함수를 만들어볼 것이다.
var str = 'banana=10&apple=20&orange=30';
function parse(qs) {
  var queryString = qs;
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]); //value
    result[key] = value; //result객체에 key와 value들이 차곡차곡 들어가겠져.
  }
  console.log(result);
  return result; //JSON형식으로 쿼리스트링이 parsing되었다.
}
parse(str);
//forEach()함수를 사용하면 따로 반복문의 순번과 배열의 크기를 따로 변수에 저장해서 사용할 필요가 없어진다.
//Array.prototype.forEach([function])는 주어진 함수를 배열의 각 원소에 대해서 실행한다.
//위의 코드에서 for문 이하를 다음과 같이 바꿀 수 있다.
chunks.forEach((chunk) => {
  //chunk에는 chunks배열의 원소들이 차례대로 들어가게 된다.
  let result;
  const parts = chunk.split('=');
  const ket = parts[0];
  const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
  result[key] = value;
});

//아까 배운 구조 분해 할당 방식을 이용하여 코드를 조금 더 간결하게 표현가능하다.
chunks.forEach((chunk) => {
  let result = {};
  const [key, value] = chunk.split('='); //몰론 이번엔 value가 숫자인지 문자인지는 안 따진다.
  result[key] = value;
});
//Map()함수의 경우 forEach와 쓰임이 거의 유사하지만 반환값이 존재한다.
//만약 chunks.map(callback)을 호출할 경우
//callback함수는 foreach와 동일하게 chunks배열의 원소를 각각 인자로 받고 콜백함수를 실행한다.
//그리고 그때마다의 리턴값을 배열에 저장한 후, 그 배열을 리턴한다.
//따라서 바로 위의 코드에서는 콜백함수내에 객체를 따로 만들었지만 이번엔 그럴 필요가 없다.
const result = chunks.map((chunk) => {
  const [key, value] = chunk.split('=');
  return { key: key, value: value };
});
//단 위의 경우엔 result가 배열형태가 된다. 이걸 손쉽게 객체로 만드는 방법도 있을까?
//있다! 그럴 때 사용하는 것이 바로 reduce() 함수이다. 사용법은 좀 특이하다.
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0); //total은 previous result,num은 배열의 원소이다
  //두 번째 인자인 0은 previous result의 초기값이다.
  //위 reduce는 결과적으로 배열의 총합을 리턴한다.
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//그런데 reduce()가 실무에서는 배열의 총합이 아니라 배열을 객체로 만드는데 활용된다고 한다.
//How? 초기값을 빈 객체로 두고 시작하면 됨
function parse(qs) {
  var queryString = qs;
  var chunks = qs.split('&');
  var result = {};
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key: key, value: value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
parse(str);
