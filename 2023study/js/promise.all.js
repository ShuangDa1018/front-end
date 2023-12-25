function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter == promiseNum) {
          return resolve(resolvedResult)
        }
      }, error => {
        return reject(error)
      })
    }
  })
}
// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(3)
  }, 1000)
})
let p4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(4);
    resolve(4)
  }, 1000)
})
// promiseAll([p3, p1, p2, p4]).then(res => {
//   console.log(res) // [3, 1, 2]
// }).catch(arr => {
//   console.log(arr,11);
// })


Promise.all([p1, p2, p3, p4]).then(res => {
  console.log(res,'Promise.all');
}).catch(arr => {
  console.log(arr,'all');
})
Promise.allSettled([p1, p2, p3, p4]).then(res => {
  console.log(res,'Promise.allSettled');
}).catch(arr => {
  console.log(arr,'allSettled');
})

// // Promise.race = function (args) {
// //   return new Promise((resolve, rejet) => {
// //     for (let i = 0; i < args.length; i++) {
// //       Promise.resolve(args[i]).then(resolve, rejet)
// //     }
// //   })
// // }

Promise.race([p3, p2, p3, p4]).then(res => {
  console.log(res,'Promise.race');
}).catch(arr => {
  console.log(arr,'race');
})
Promise.any([p3, p2, p3, p3]).then(res => {
  console.log(res,'Promise.any');
}).catch(arr => {
  console.log(arr,'any');
})