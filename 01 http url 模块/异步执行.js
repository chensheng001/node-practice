function print() {
    for(var i = 0; i<5;i++){
        setTimeout(() => {
            console.log(i);
            console.log(new Date())
        })
    }
}
print();
//console.log(i);
console.log(new Date())