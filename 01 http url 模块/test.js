function sum(a) {
    return function(b){
        return a + b;
    }
}
console.log(sum(2)(3));

function sum2(){
    return Array.prototype.slice.call(arguments).reduce((prev,current) => prev + current, 0);
}
console.log(sum2(1,2,3));