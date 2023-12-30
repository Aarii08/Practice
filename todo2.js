const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));  // ローカルストレージに保存されている値を取得する。この("todos")はキー名
// JSON.parseをつけて配列として取得する


// 保存されているtodosがあれば、表示（liタグを追加する）
if (todos) {
  todos.forEach(todo => {
    add(todo);  // 下のadd()関数に飛ぶ
  })
}

// 1.formに入力された値を取得する
form.addEventListener("submit", function(event) {
  event.preventDefault();
  add();  // 取得した値をHTMLに表示するメソッド
});


// 2.取得した値をHTML上に表示する　→ ul li タグを使って表示する
function add(todo) {
  let todoText = input.value;  // input.value が複数出てくるから変数に入れる

  if (todo) {  // もし保存している値があれば、表示（todo は上の10行目のforEachで使っているtodo）
    todoText = todo.text;  // saveData関数でtodoのオブジェクトを定義しているから、その中のtext部分を取得
  }

  if (todoText) {  // 3.入力フォームが空でもli追加されてしまうのを防ぐために、if で条件分岐をする

    const li = document.createElement("li");
    li.innerText = todoText;  // li のテキストにユーザーが入力した input.valueの値（変数に変換したtodoText）を設定する
    li.classList.add("list-group-item");  // li に"list-group-item"というクラスを追加

   

    if (todo && todo.completed) {  // todoが存在していて、completedがtrue なら、クラスを追加
      li.classList.add("text-decoration-line-through");
    }


    // 5.右クリックしたときに削除できるようにする
    li.addEventListener("contextmenu", function(event) {
      event.preventDefault();  // 右クリックしたときに、メニュー表示がでないようにする
      li.remove();  // liダグを削除
      saveData();  // ローカルストレージにも反映させる
    });

    // 6.左クリックしたら取り消し線を引き完了状態にする
    li.addEventListener("click", function() {
      li.classList.toggle("text-decoration-line-through"); // クラス名"text-decoration-line-through"があれば消す、なければつける
      // toggle は切り替え。あれば消す、なければつける意味
      saveData();
    });


    // 2-1. ul タグの子要素として li を作成するため　ul にアクセスするため、３行目　const ul を定義する
    ul.appendChild(li);  // ul の子要素として li を指定
    input.value = "";　// 入力フォームを空にする

    saveData();
    // 4. 入力した値をリロードしても表示されるようにするためにデータをローカルストレージ（ブラウザ内）に保存させるためのメソッド

  }

  // 3. 入力フォームが空でもli追加されてしまうのを防ぐために、if で条件分岐をする
  //   → if文の中に、liタグを作成〜入力フォームを空にするまでの記述を入れる

};


 // 4. リロードしても入力された値が表示されるようにする
 //    ローカルストレージ（ブラウザ内）に保存しておく
function saveData() {
  // 画面に表示された値のデータを取得する → liタグのデータを取得
  const lists = document.querySelectorAll("li");  // querySelectorAll でliタグ全てを取得できる → 配列として受けとる
  // lists[0].innerText とすることで配列lists に入っている0番目のテキストを取得できる

  let todos = [];  // forEachで取得した値を配列にしまうためのものを定義



  // liの中の数はいくつかわからないから、forEachで配列の中の全部の値を取得する
  lists.forEach(list => {

    // 7。打ち消し線がある状態を保存できるようにする
    let todo = {  // オブジェクトを定義
      text: list.innerText,
      completed: list.classList.contains("text-decoration-line-through")
      // listが"text-decoration-line-through"クラスを持っているか確認する。持っていればtrue
    };

    todos.push(todo);  // 取得した値を配列todosに入れる。その方がデータとして扱いやすいため → 上で定義した変数todoを入れる
  });

  // ローカルストレージに保存する
  // キー"todos", 値"JSON~" 配列todosの値をJSON形式で保存
  localStorage.setItem("todos", JSON.stringify(todos));


}
