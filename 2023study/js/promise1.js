// var a
// let b = new Promise((resolve) => {
//     console.log(123)
//     setTimeout(()=>{
//         resolve('bb')
//         console.log(0)
//     },1000)
// }).then(res => {
//     console.log(1)
// }).then(res => {
//     console.log(2)
// })

// a = new Promise(async (resolve) => {
//     console.log(a)
//     await b
//     console.log(a,'a');
//     console.log('3');
//     resolve('aa')
//     await a
//     console.log('4');
// }).then(res => {
//     console.log(7)
// }).then(res => {
//     console.log(8)
// })


setTimeout(()=>{
    console.log('11');
},0)
setTimeout(()=>{
    console.log('22');
},1)
console.log(222);