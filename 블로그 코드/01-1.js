//es5기반으로 작성한 코드
//ex1
var string1='안녕하세요';
var string2='제 이름은 강창수입니다.'
var introduce=string1+' '+string2;
console.log(introduce);

//ex2
var product={name: '도서', price: '4200원'};
var message='제품 '+ product.name+'의 가격은 '+product.price+'입니다.'
console.log(message);

//ex3
var multiLine='첫 번째 줄\n두 번째 줄';
console.log(multiLine);

//ex4
var value1=3;
var value2=4;
var boolValue=false;
var operator1='곱셈값은 '+(value1*value2)+'입니다';
var operator2='불리언값은 '+(boolValue?'참':'거짓')+'입니다';
console.log(operator1);
console.log(operator2);