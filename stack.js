
function flatten(...stack) {
  const result = [];
  while (stack.length) {
    const el = stack.shift();
    if (Array.isArray(el)) {
      stack.unshift(...el);
      continue;
    }

    result.push(el);
  }

  return result;
}

console.log(flatten(1, [2, [[4]], 4, 5, [3]]));







//
// class Stack {
//     constructor() {
//         this.data = []
//     }
//
//     push(record) {
//         this.data.push(record)
//     }
//
//     pop() {
//         return this.data.pop()
//     }
// }

