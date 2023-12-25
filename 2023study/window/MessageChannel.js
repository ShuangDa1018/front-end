var channel = new MessageChannel();
var port1 = channel.port1;
var port2 = channel.port2;
var port3 = channel.port3;
console.log(channel);
port1.onmessage = function(event) {
    console.log("port1收到来自port2的数据：" + event.data);
}
port2.onmessage = function(event) {
    console.log("port2收到来自port1的数据：" + event.data);
}


port1.postMessage("port1.发送给port2");
port2.postMessage("发送给port1");



// 有undefined + 循环引用
let obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    f: undefined
  }
  obj.c = obj.b;
  obj.e = obj.a
  obj.b.c = obj.c
  obj.b.d = obj.b
  obj.b.e = obj.b.c

  function deepCopy(obj) {
    return new Promise((resolve) => {
      const {port1, port2} = new MessageChannel();
      port2.onmessage = ev => resolve(ev.data);
      port1.postMessage(obj);
    });
  }

  deepCopy(obj).then((copy) => {           // 请记住`MessageChannel`是异步的这个前提！
      let copyObj = copy;
      console.log(copyObj, obj)
      console.log(copyObj == obj)
  });
