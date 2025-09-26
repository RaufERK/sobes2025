// console.log('____START____')

// console.log(1, parseInt('1px'))
// console.log(2, parseInt('-1.2'))
// console.log(3, parseInt('0 минут'))
// console.log(4, parseInt('$1.2'))

// console.log(5, 2 && 1 && null && 0 && undefined)

// console.log(6, 0 || (1 && 2) || 3)
// ;('use strict')

// a = null + undefined
// alert(a)

// String.prototype.greeting = (msg) => {
//   // console.log(`${this} ${msg}`)
//   console.log(this)
// }

// 'Вася'.greeting('Hello!!!')

// function show() {
//   console.log(this)
// }
// show()

// const arrow = () => {
//   console.log(this)
// }
// arrow()

// const obj = {
//   name: 'Alice',
//   sayHi() {
//     console.log(this.name)
//   },
// }
// obj.sayHi()
// const obj = {
//   name: 'Bob',
//   sayHi: () => {
//     console.log(this.name)
//   },
// }
// obj.sayHi()

// const user = {
//   name: "Charlie",
//   greet() {
//     const arrow = () => {
//       console.log(this.name);
//     };
//     arrow();
//   },
// };
// user.greet();

// const user = {
//   name: 'Dave',
//   sayHi() {
//     console.log(this.name)
//   },
// }

// user.sayHi()
// const hi = user.sayHi
// hi()

// function hello() {
//   console.log(this.msg);
// }
// const bound = hello.bind({ msg: "Hello!" });
// bound();

// Чему равна длина arr.length массива arr?
const alert = console.log;

// let arr = []
// arr[1] = 1
// arr[3] = 33

// console.log(arr.length)
// console.log(arr)

let arr = [1, 2, 3];
arr.something = 5;

alert(arr.something);
alert(arr);
