class B {
    constructor(params) {
        this.name = params;
    }
    runb() {
        console.log('run b method');
    }
}

class A extends B {
    constructor(name) {
        super(name);
        this.runb();
        console.log(this.name)
    }
    runa() {
        console.log('run a method');
    }
}

// const a = new A('我是a');

let sour = {
    name: 1,
    fn: function(){
        console.log('fn')
    }
}
let myName = Symbol();
let des = sour;
des[myName] = 2;
console.log(sour);
console.log(des[myName]);