let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}
let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  console.log("do->", i)
  sum += i; //1 2 3

  console.log(i)
}

console.log(sum);
