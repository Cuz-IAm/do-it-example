//가변 변수와 불변 변수->let과 num
//불변 변수? 왜 불변인데 변수일까? 상수라고 하면 안될까? 글에 따라서 상수라고 써놓은 사람도 있던데?
//어떤 사람은 변수 영역 메모리가 변하는가에 따라 상수(constant)와 변수(variable)를 구별하고,
//데이터 영역 메모리가 변하는가에 따라서 불변(immutable)과 가변(mutable)을 구별한다고 한다.
//근데 그 말을 토대로 해석해도 문제다. const키워드로 어떤 변수를 정의하면 변수 영역 메모리에 들어간 값이 변화하지 않으니까 이것도 상수 아니야?
//hmm... 그래서 나는 그냥 상수라고 표현하려고 한다.

//let은 var과 유사하지만 스코프가 블록 레벨 스코프에 해당한다.
let num = 1;
num = num * 3;
let str = '문자';
str = '새 문자';
let arr = [];
arr = [1, 2, 3];

//const는 상수를 표현할 때 사용한다. const에 한번 값이 할당되면 절대로 변화시킬 수 없다.
//아래와 같이 사용할 경우 에러가 발생한다. node로 실행하면 바로 typeError가 발생하는 것을 알 수 있다.
const _num = 1;
_num = 3;
const _str = '문자';
_str = '새 문자';
const _arr = [];
_arr = [1, 2, 3];
const obj = {};
obj = { name: '내 이름' };
console.log(_num);

//근데 객체나 배열과 같이 참조형 데이터타입은 const로 선언해도 내부의 요소(method,attribute,element)들은 변화가 가능하다.
//*그렇다고 const에 실질적으로 저장된 값들이 변화하는 것은 아니다. const에는 객체의 주소가 저장되어있고
//그 주소는 절대 변화할 수가 없다.
const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0);
arr2.pop();
const obj2 = {};
obj2['name'] = '내이름';
Object.assign(obj2, { name: '새이름' });
delete obj2.name;
//위의 코드는 무결성 제약 조건에 위배된다.
//arr2와 obj2의 내부 값이 어떤 경우에도 변화하지 않도록 함수를 선택하는 것이 좋다.
//따라서 새로운 변수를 선언해서 사용하는 것이 좋다.
