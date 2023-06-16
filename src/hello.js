const helloWord = 'hello world';
const a = true;
export function hello(flag = false) {
  if (flag) {
    console.log(helloWord);
  } else if (a) {
    console.log(a);
  } else if (helloWord) {
    console.log(helloWord);
  } else {
    console.log('end');
  }
}

export function test() {}
