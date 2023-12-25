// const a ={
//     b:123,
//     geta:()=>{
//         console.log(this.b)
//     }
// }
// const {geta} = a
// geta()
// console.log(this)
var length =4
function callback(){
    console.log(this);
    console.log(this.length)
}
const obj = {
    length:5,
    methods(callback){
        // console.log(arguments[0]());
        // arguments[0]()
        callback()
    },
}

obj.methods(callback,1)

callback()