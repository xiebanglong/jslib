const helloWord = 'hello world';
const canGo = true;
export function hello(flag = false) {
  if (flag) {
    console.log(helloWord);
  } else if (canGo) {
    console.log(canGo);
  } else if (helloWord) {
    console.log(helloWord);
  } else {
    console.log('end');
  }
}

export function test() {
  console.log('test');
}
