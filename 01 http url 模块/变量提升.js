
// 函数提升 必须是函数声明的形式，不能是函数表达式的形式
aa();
function aa() {
    console.log('aa');
}

var bb = () =>{
    console.log('bb');
}
bb();

// cc();
var cc = ()=>{
    console.log('cc');
}

if(true){
    var i =0;
}
console.log(i);


/*function bb() {
    var j = 1;
}
bb();
console.log(j);*/

// function cc() {
//     t=2;
// }
// cc();
// console.log(t);










