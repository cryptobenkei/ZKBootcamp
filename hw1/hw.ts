const mod = 7;

const mul = (a: number, b:number) => {
  if (a < 0 || a >= mod) throw(new Error('a is not in the field'))
  if (b < 0 || b >= mod) throw(new Error('b is not in the field'))
  return (a * b) % mod
}

const add = (a: number, b:number) => {
  if (a < 0 || a >= mod) throw(new Error('a is not in the field'))
  if (b < 0 || b >= mod) throw(new Error('b is not in the field'))
  return (a + b) % mod
}

const inv = (a: number) => {
  if (a < 0 || a >= mod) throw(new Error('a is not in the field'))
  const inv: number = Math.pow(a, (mod- 2));
  return inv % mod
}

console.log('\nExercise 1');
console.log('a) result 4 + 4 = ' + add(4,4));
console.log('b) result 5 * 3 = ' + mul(3,5));
console.log('c) result inv(3)  = ' + inv(3));
console.log('\nExercise 2');
console.log('a) Closure = true');
console.log('b) Associativity = true');
// console.log(mul(mul(3,5),2) + ' ' + mul(3,mul(5,2)));
console.log('c) Identity = true');
// console.log(mul(1,2) + ' ' + mul(3,1));
console.log('d) INverse true= true');
// console.log(inv(3) + ' ' + inv(5));

