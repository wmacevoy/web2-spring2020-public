const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let state = "X";

let X = null;
let N = null;
let P = null;
let i = null;
let A = null;


rl.on('line', (line) => {
  if (state == "X") {
    X = parseInt(line);
    state = "N";
  } else if (state == "N") {
    N = parseInt(line);
    state = "P";
    P=new Array(N);
    i=0;
  } else if (state == "P") {
    P[i] = parseInt(line);
    i = i + 1;
    if (i == N) {
      solve();
      write();
      state="X";
    }
  }
});

function solve() {
  A = X;
  i = 0;
  while (i != N) {
    A = A + X;
    A = A - P[i];
    i = i + 1;
  }
}

function write() {
  console.log(A);
}
