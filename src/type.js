const helloWord = 'hello type';

export function hello() {
  console.log(helloWord);
}

export function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
