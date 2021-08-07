//destructuring assignment(구조 분해 할당)
//iterable한 모든 객체는 분해하여 변수에 할당할 수 있다.
//ex1(배열을 분해 할당)
let array1 = ['a', 'b'];
let first = array1[0];
let second = array1[1];
console.log(first, second); //result: a b
let [third, fourth] = array1;
console.log(third, fourth); //result: a b

//ex2(필요없는 원소를 제외하고 할당하기)
let food = ['Blackpudding', 'Kimchi', 'Sausage', 'Spaghetti'];
let [breakfast, , lunch, dinner] = food;
console.log(breakfast, lunch, dinner); //result: BlackPudding Sausage Spaghetti

//ex3(변수 swap하기)
let admin = 'Tom';
let guest1 = 'Liam';
let guest2 = 'Daniel';
[guest1, admin, guest2] = [admin, guest1, guest2];
console.log(admin, guest1, guest2); //result: Liam Tom Daniel

//ex4(기본값 설정)
let [firstName, lastName] = [];
console.log(firstName, lastName); //result: undefined undefined
[firstName = 'Kang', lastName = 'Caesar'] = ['Julius'];
console.log(firstName, lastName); //result: Julius Caesar

//ex5(객체 분해 할당)
let book = {
  title: 'God',
  writer: 'Bernard werber',
  price: '21000',
};
let { title, writer, price } = book; //변수명에 대응하는 키를 찾고 그 값을 대입한다.
console.log(title, writer, price); //result: God Bernard werber 21000

//ex6(키와 다른 이름을 가지는 변수에 분해 할당하기)
let book = {
  title: 'God',
  writer: 'Bernard werber',
  price: '21000',
};
let { title: a, writer: b, price: c } = book;
console.log(a, b, c); //result: God Bernard werber 21000

//ex7(기본값 설정,프로퍼티가 없는 경우에 대비한다.)
let book = {
  title: 'God',
  writer: 'Bernard werber',
  price: '21000',
};
let { another = 'Ants', price } = book;
console.log(another, price); //result: God Bernard werber 21000
//homework1(rest parameter)
let [a, b, ...c] = '12345';
console.log(a, b, c);
console.log(a, b, ...c);

//homework2(콜론과 대입연산자 동시사용)
let book = {
  title: 'God',
  writer: 'Bernard werber',
  price: '21000',
};
let { pages: pg = 220, title, price } = book;
console.log(title, price, pg); //result: God 21000 220
