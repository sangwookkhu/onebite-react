// 1. 상수 객체
// 객체는 상수로도 선언할 수 있고, 그 내부의 속성은 변경할 수 있다.
const animal = {
    type: "cat",
    name: "Whiskers",
    color: "black"
};

animal.age = 2;
animal.name = "Mittens";
delete animal.color;

console.log(animal); // { type: 'cat', name: 'Mittens', age: 2 }

// 2. 메서드
// 객체 내부에 함수를 메서드로 정의
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    sayHi() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person.greet(); // Hello, my name is Alice
person.sayHi(); // Hi, I'm Alice