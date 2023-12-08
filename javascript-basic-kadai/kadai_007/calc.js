

//１以上のランダムな整数をnumに代入
let num = 1 + Math.floor(Math.random() * 100);

//num確認用で出力
console.log(num);

//条件式
if (num % 15 === 0){
    console.log('3と5の倍数です');
}
else if (num % 3 === 0){
    console.log('3の倍数です');
}
else if (num % 5 === 0){
    console.log('5の倍数です');
}
else {
    console.log(num);
}