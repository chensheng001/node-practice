
// 函数提升 必须是函数声明的形式，不能是函数表达式的形式
aa();
function aa() {
    console.log('aa');
}

var bb = () =>{
    console.log('bb');
}
bb();

cc();
var cc = ()=>{
    console.log('cc');
}