// 1. filter
const numbers = [30, 12, 80, 90, 7];
// true인것들만 배열에 추가되고 그 배열이 리턴된다.
console.log(numbers.filter(number => number > 15));

// 2. includes
const greetings = ['hi', 'hello', 'howdy'];
//존재하면 true리턴
console.log(greetings.includes('hello'));

// map, forEach, push, reverse,
// reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
