
// 提取公共元素 arr => [1,2]

//const arr = [1,1,2,2,3];
const arr =[{a:1},{a:2},{a:2},{a:1},{a:3}];
const obj = {}, res = [];

// 1.0 循环作标记
// arr.map(item => !obj[item]? obj[item]=true : res.push(item));

/*for (let i=0;i<arr.length;i++) {
    if (!obj[arr[i]]) {
        obj[arr[i]] = true;
    }else{
        res.push(arr[i]);
    }
}*/

// 2.0 利用map键值对里面的键的唯一性
const map = new Map();
arr.forEach(item => {
    map.has(item.a) ? res.push(item) : map.set(item.a, 1)
});
console.log(map);
console.log(res);
