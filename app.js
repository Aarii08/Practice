const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  },{
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct: "MOTHER2"
  },{
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: [
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct: "セシル"
  }
  ];

  let quizNum = 0;

  let score = 0;


// HTMLのオブジェクトをとってくるときに、慣例として $ をつける
  const $button = document.getElementsByTagName('button');


// クイズの問題文、選択肢を定義
const setupQuiz = () => {

  // 定数の文字列をHTMLに反映させる
  document.getElementById('js-question').textContent = quiz[quizNum].question;


  // $button[0].textContent = answers[0]; // 省略後
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
  // これを省略したのが、下のwhile文

  let buttonNum = 0;
  while (buttonNum < $button.length) {
    $button[buttonNum].textContent = quiz[quizNum].answers[buttonNum];
    buttonNum++;
  }
}

// 元々はこの文、長いので 定数button に入れて、省略する
// document.getElementsByTagName('button')[0].textContent = answers[0];　省略前


setupQuiz();   // 問題文の定義を、関数に入れ、関数を定義


// ボタンをクリックしたら正誤判定
// document.getElementsByTagName('button')[0].addEventListener('click', () => {  　省略前

// $button[0].addEventListener('click', () => {    　 // 省略後 定数button に入れて省略している
//
// if(correct === $button[0].textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// })

// 上の if文を関数にしまう
const clickHandler = (e) => {
  if(quiz[quizNum].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }


  quizNum++;

  if (quizNum < quiz.length) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quiz.length + 'です。');
  }

};

// $button[0].addEventListener('click', () => {   この部分をbuttonぶんくり返すことになるからwhile文で繰り返し
let handler = 0;
while (handler < $button.length) {
  $button[handler].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handler++;
}

