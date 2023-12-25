// 1. 手写 Object.create
function create(obj) {
    function F() { }
    F.prototype = obj
    return new F()
}

// console.log(create({a:21}))
// console.log(Object.create({a:21}))

// 2. 手写 instanceof 方法
function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype
    while (true) {
        console.log(proto, prototype);
        if (proto === prototype) return true
        if (!proto) return false
        proto = Object.getPrototypeOf(proto)
    }
}
// console.log(myInstanceof({ a: 2 }, Array));

// 3. 手写 new 操作符
// function objectFactory(fn, ...args) {
//     let obj = Object.create(null)
//     obj.__proto__ = fn.prototype
//     Array.prototype.shift.call(arguments)
//     console.log(arguments);
//     const res = fn.apply(this, arguments)

//     return Object.prototype.toString(obj) === '[obejct,object]' ? res : obj
// }
function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== "function") {
      console.error("type error");
      return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象4
    console.log(constructor);
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
  }
  // 使用方法
  
objectFactory(myInstanceof,1,2)
