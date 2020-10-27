
let obj = {
    name: 'this is obj',
    time: '2019-12-26',
    _r: 'this is _r'
};

let monitor = new Proxy(obj,  {
   get: function(target, key) {
       console.log(key, '-------ke   y')
       return target;
   }
});

console.log('nam1e' in obj);

