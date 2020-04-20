
let promise = new Promise((resolve, reject) => {
    console.log(`开始执行`)

    // 如果执行成功，则调用resolve()
    resolve('success')

    console.log(`执行中ing`)
}).then(res => {
    console.log(res)
    console.log('执行成功，继续执行下一步')
    return '第二then方法，开始'
})

// 如果执行成功，则继续调用then方法
promise.then(res => {
    console.log(res,'++++++++++++')
})

// promise内部是同步的，但是then方法是异步的
console.log(`我会在then方法前，先执行`)

// 我们可以利用timeout方法在then方法执行完成后，进行执行
setTimeout(()=>console.log(`then方法执行完成后，开始执行`))


/* setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
    resolve('')
}).then(function() {
    console.log('then');
})

console.log('console'); */



/*
console.log(1);

setTimeout(() => {
    console.log("我是定时器，延迟0S执行的");
}, 0);

new Promise((resolve, reject) => {
    console.log("new Promise是同步任务里面的宏任务");
    resolve("我是then里面的参数，promise里面的then方法是宏任务里面的微任务");
}).then(data => {
    console.log(data);
});

console.log(2);*/
