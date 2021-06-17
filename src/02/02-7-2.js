//구조 분해 할당
//객체나 배열의 속성을 개별변수에 할당하기 위해서는 어떤 방법을 써야했을까?
//예시코드(기존)
//배열의 경우 인덱스 하나하나에 접근해서 할당했음.
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;
//Swap을 시도할 경우 temp변수를 하나 만들어서 swap을 하였음
var temp = item2;
item2 = item1;
item1 = temp;
//객체의 경우도 일일이 객체의 요소에 접근해서 할당해주어야 했음
var obj = {
  key1: 'one',
  key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key value';
var newkey1 = obj.key1;

//ES6의 구조 분해 할당 문법을 사용한다면
//아래와 같이 대괄호 안에 변수들을 차례대로 위치시킨다.
//그러면 list배열의 index순서대로 값들이 할당된다!
var list = [0, 1];
var [item1, item2, item3 = -1] = list;
//이를 응용해서 swap도 어렵지 않게 할 수 있다.
[item2, item1] = [item1, item2];
//객체도 키값을 다른 변수로 할당하려면 이렇게 쓰면 편하다.
var obj = {
  key1: 'one',
  key2: 'two',
};
var {
  key1: newKey1, //newKey1=obj.key1
  key2, //key2=obj.key2
  key3 = 'default key value',
} = obj;

//언제가 제일 유용한가?
//함수 인자값을 다루거나 JSON데이터를 빠르게 변환하고 싶을 때 아주 유용하다.
var [item1, ...otherItem] = [0, 1, 2]; //item1에 0이 대입되고 otherItem에 배열 형태로 1,2가 저장된다.
var { key1, ...others } = { key1: 'one', key2: 'two' }; //others는 객체형태로 key2가 키 이름으로 'two'가 키 값으로 저장된다.
