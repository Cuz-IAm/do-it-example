//p41 Template String
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;
console.log(greeting);

var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + '입니다';
console.log(message);

var multiline = '문자열1\n문자열2'; //이스케이프 시퀀스를 써주어야 개행이 된다.
console.log(multiline);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은' + value1 * value2 + '입니다';
var operator2 = '불리언값은' + (boolValue ? '참' : '거짓') + '입니다.';
console.log(operator1);
console.log(operator2);
//위의 방법보다 좀 더 효과적인 방법이 없을까?
//ES6문법에는 Template String이라는 문법이 있다.
//작은따옴표대신 백틱(`),$,Curly bracket를 이용하여 변수또는 식을 선택하는 방법이다.
//+연산자보다 문자열과 변수를 좀 더 직관적으로 연결할 수 있다.
//아래는 Template String을 활용하여 다시 작성한 코드이다.
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`; //+기호대신 $를 사용
console.log(greeting);

var product = { name: '도서', price: '4200원' };
var message = `제품 ${product.name}의 가격은 ${product.price} 입니다`; //위의 방법에선 작은따옴표와 +연산자를 일일이 써줘야해서 귀찮았다.
console.log(message);

var multiline = `문자열1
문자열2`; //이스케이프 시퀀스를 쓰지 않고 그냥 개행을 해주면 그대로 적용된다.
console.log(multiline);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;
console.log(operator1);
console.log(operator2);

//3분 코딩
// var cart={name:'도서',price: 5000};
// var getTotal=function(cart){
//   return cart.price+'원';
// };
// var myCart='장바구니에 '+ cart.name+'가 있습니다. 총 금액은 '+getTotal(cart)+' 입니다.';
//수정하면

var cart = { name: '도서', price: 5000 };
var getTotal = function (cart) {
  return `${cart.price}원`;
};
var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)} 입니다.`;
console.log(myCart);
