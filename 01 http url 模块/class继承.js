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
        console.log(this);
    }
    runa() {
        console.log('run a method');
    }
}

const a = new A('我是a');
a.runa();