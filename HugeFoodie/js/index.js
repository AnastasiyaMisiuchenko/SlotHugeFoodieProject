let a = 5;
let b = 4;
class A {
    constructor() {

    }
    printf(txt){
        console.log(txt)
    }
}

let objA = new A();
objA.printf("a + b = " + (a + b) );
console.log(a + b);