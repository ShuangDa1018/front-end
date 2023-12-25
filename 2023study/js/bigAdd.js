function sumBigNumber(a, b) {
    let res = '';
    let temp = 0;
    console.log(a,b);
    a = a.split('');
    b = b.split('');
    
    while (a.length || b.length || temp) {
      temp += ~~a.pop() + ~~b.pop();
      console.log(a.pop());
      res = (temp % 10) + res;
      temp  = temp > 9
    }
    return res.replace(/^0+/, '');
  }
 console.log( sumBigNumber('1111111111111111111', '222222222222222222222222222'));