// 8. 手写防抖函数
function debounce(fn, wait) {
    let timer = null

    return function () {
        let context = this
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            console.log(arguments);
            fn.apply(this, arguments)
        }, wait)
    }
}
function fn(a, b) {
    console.log(this, a, b)
}
const newFn = debounce(fn, 1000)
document.addEventListener('click', newFn)
document.addEventListener('click', fn)


// 9. 手写节流函数
function throttle(fn, delay) {
    let curTime = Date.now()
    return function () {
        if (Date.now() - curTime > delay * 1000) {
            fn.apply(this, arguments)
        }
    }
}
// 10. 手写类型判断函数
function getType(value) {
    // 判断数据是 null 的情况
    if (value === null) {
      return value + "";
    }
    // 判断数据是引用类型的情况
    if (typeof value === "object") {
      let valueClass = Object.prototype.toString.call(value),
        type = valueClass.split(" ")[1].split("");
      type.pop();
      console.log(valueClass);
      return type.join("").toLowerCase();
    } else {
      // 判断数据是基本数据类型的情况和函数的情况
      return typeof value;
    }
  }
console.log(  getType(this));