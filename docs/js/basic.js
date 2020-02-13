
function ifdice() {
    const p = Math.random();
    if (p < 0.05) {
        console.log("lucky!");
    } else if (p < 0.25) {
        console.log("lucky?");
    } else if (p < 0.75) {
        console.log("unlucky.");
    } else {
        console.log("i'm tired.");
    }
}

function whileVersion() {
    // variable x is available from here to end of containing
    // { ... } block (which is a function here)
    let x = 1; 
    const n = 10;
    while (x <= n) {
        console.log(`x=${x}`)
        ++x;
    }
    n = 22;
    console.log(`after while, x = ${x}, n = ${n}`)
}

function forVersion() {
    const n = 10;
    for (let x=1; x <= n; ++x) {
        console.log(`x=${x}`)
    }
    console.log(`after while, x = ${x}, n = ${n}`)
}

function stopping() {
    for (let i=0; i != 5; i = i + 1) {
        let x = i/5.0;
        console.log(x);
    }

    for (let x=0.0; Math.abs(x-1.0) < 1e-9; x = x + 0.2) {
        console.log(x);
    }

}