function forLoop(array) {
  for(i = 0; i < 25; i++) {
    if (i === 0) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(Math.floor(n));
    n--;
  } 
  console.log 'Done';
}
