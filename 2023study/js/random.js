var arr = [1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < arr.length; i++) {
  const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
  [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
}
console.log(arr)


let sum = arr.reduce( (total,i) => total += i);
console.log(sum);

var arr1=[1,2,3,[[4,5],6],7,8,9,10]
console.log(arr1.toString().split(','));
 arr1= arr1.toString().split(',').reduce( (total,i) => total += Number(i),0);
console.log(arr1);



function repeat(s, n) {
    return (new Array(n + 1)).join(s);
}
