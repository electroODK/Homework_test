var quest = 0;

let test1 = +prompt('Сколько будет 12 в квадрате');
if (test1 == 144) {
  alert('correct');
  quest++;
} else {
  alert('incorrect');
}

let test2 = +prompt('сколько Областей в Республике Узбекистан');
if (test2 == 12) {
  alert('correct');
  quest++;
} else {
  alert('incorrect');
}

let test3 = confirm('число 145620 кратно 5?');

if (test3 === true) {
  alert('correct');
  quest++;
} else {
  alert('incorrect');
}

let test4 = +prompt('Сколько недель в 1 году');

if (test4 == 52) {
  alert('correct');
  quest++;
} else {
  alert('incorrect');
}

let test5 = +prompt('Чему равен квадратный корень из 256');

if (test5 == 16) {
  alert('correct');
  quest++;
} else {
  alert('incorrect');
}
alert('Number of correct asnvers: '   + quest +   ' ansvers');
