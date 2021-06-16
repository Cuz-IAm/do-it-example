//ES6에서는 Class문법이 새롭게 등장한다.
//객체지향적인 코딩(상속,캡슐화)을 사용하기 위해서 기존 ES5까지는 prototype객체를 활용하는 방법을 사용했다.
//class문법을 사용함으로서 객체지향적인 모습을 좀 더 간결하게 나타낼 수 있게 되었다.

//예시코드(ES5)
function Shape(x, y) {
  //생성자 함수 정의
  this.name = 'Shape';
  this.move(x, y);
}
Shape.create = function (x, y) {
  return new Shape(x, y);
}; //Shape 인스턴스를 만드는 메소드 추가

Shape.prototype.move = function (x, y) {
  //move메소드 정의
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  //area메소드 정의
  return 0;
};
//Shape객체는 따라서 name 속성과 create,move,area 메소드를 가지게 된다.
var s = new Shape(0, 0);
s.area();

//Shape을 상속받는 Circle객체를 구현해보자.
function Circle(x, y, radius) {
  Shape.call(this, x, y); //Circle객체 생성자 안에 Shape객체 생성자를 넣어놓음
  this.name = 'Circle';
  this.radius = 'radius';
}
Object.assign(Circle.prototype, Shape.prototype, {
  //Circle의 새로운 메소드 추가.
  area: function () {
    return this.radius * this.radius;
  },
});
var c = new Circle(0, 0, 10); //Circle의 인스턴스인 c를 생성함.
c.area(); //100이 나온다.

//예시코드(ES6의 class사용)
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  } //static 함수 만듬. 유틸 함수만들때 좋아짐.
  //static을 쓰지 않으면 prototype 메소드로 받아들인다.
  name = 'Shape';
  constructor(x, y) {
    //생성자 함수
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}
var s = new Shape(0, 0); //0,0은 생성자 함수의 인자로 들어감.
s.area();

class Circle extends Shape {
  //상속은 extends를 이용하여 구현한다. (다중상속은 불가)
  constructor(x, y, radius) {
    super(x, y); //super()는 부모 객체의 생성자를 호출함.
    this.radius = radius;
  }
  area() {
    if (this.radius === 0) return super.area(); //이 경우 super는 부모 객체에 접근함. super,super()는 다르다.
    return this.radius * this.radius;
  }
}
var c = new Circle(0, 0, 10);
c.area();
