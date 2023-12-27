// 変数
let abc = 'Hello world';
abc = 'Hello Japan!';

// 定数
const efg = 'Yahaa!!';

// 配列
let name = ['あり', 'さか', 'なお'];

console.log(name);
console.log(name[0]);
console.log('-------');

// ループ文
// let index = 0;
// while( index < name.length) {
//   console.log(name[index]);
//   index++;
// }

// if・else文
// if(name.length > 5) {
//   console.log('Yahaaaaa!');
// } else {
//   console.log('foo...');
// }

// 関数
const test = (num) => {
  // ここに実行したい命令を書く
  if(name.length > num) {
    console.log('Yahaaaaa!');
  } else {
    console.log('foo...');
  }
};
// test(0);
// test(2);
// test(5);


// オブジェクト データの塊
const ari = {
  color: 'green',
  size: 'small',
  car: 'vezel',
  goDrive: () => {
    console.log('海へ行く');
  }
};

console.log(ari);
console.log(ari.car);
console.log(ari.goDrive());

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello World!!');
});