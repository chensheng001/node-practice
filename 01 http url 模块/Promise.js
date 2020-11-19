
const promise1 = new Promise(resolve => {
    setTimeout(()=>{
        resolve(1)
    }, 1000)
});

const promise2 = new Promise(resolve => {
    setTimeout(()=>{
        resolve(2)
    }, 2000)
})

Promise.all = function(proArr){
    return new Promise(resolve => {
        let result = [], count = 0;
        if (proArr.length === 0) {
            resolve([]);
        }else {
            for(let i = 0; i< proArr.length; i++){
                proArr[i].then(data => {
                    result[i] = data;
                    count ++;
                    if (count === proArr.length) {
                        resolve(result);
                    }
                })
            }
        }
    })
}

Promise.race = function(proArr){
    if (!Array.isArray(proArr)) {
        throw new TypeError(`arguments must be a array!`);
    }else{
        return new Promise(resolve => {
            proArr.forEach(item => {
                item.then(data => {
                    resolve(data);
                })
            })
        })
    }
}

/* const result = Promise.all([promise1,promise2]);
result.then(res => {
    console.log(res);
}); */

const raceRes = Promise.race([promise1,promise2]);
raceRes.then(res => {
    console.log(res);
})