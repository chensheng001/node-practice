
async function aa() {
    console.log(4)
    return 'aa';
}

console.log(1)
const res = aa();
res.then(data => {
    console.log(2)
    console.log(data);
});
console.log(3)