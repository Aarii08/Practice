
const inputDate = document.getElementById("date");
const inputText = document.getElementById("text");
const btn = document.getElementById("btn");
const ulLimit = document.getElementById("ul");

const limitTodos = JSON.parse(localStorage.getItem("todosLimit"));


if (limitTodos) {
  limitTodos.forEach(todo => {
    addBtn(todo);
  })
}

btn.addEventListener("click", function(event) {
  event.preventDefault();
  if(inputDate.value && inputText.value) {
    addBtn();
  } else if(inputText.value) {
    alert("日付を入力してください");
  } else if(inputDate.value){
    alert("TODOを入力してください");
  } else {
    alert("日付とTODOを入力してください");
  }
});


function addBtn(todoLimit) {
  let todoSet = inputDate.value + " までに " + inputText.value;

  if(todoLimit) {
    todoSet = todoLimit.texts
  }

  if(todoSet != "") {
    const liLimit = document.createElement("li");
    liLimit.innerText = todoSet;
    liLimit.classList.add("list-group-item");
    liLimit.classList.add("limit");

    if (todoLimit && todoLimit.completed) {
      liLimit.classList.add("text-decoration-line-through");
    }

    liLimit.addEventListener("contextmenu", function(e) {
      e.preventDefault();   // 右クリックしたときに、ツールが出ないように
      liLimit.remove();  // 削除
      saveDataLimit();
    });

    liLimit.addEventListener("click", function() {
      liLimit.classList.toggle("text-decoration-line-through");
      saveDataLimit();
    });

    ulLimit.appendChild(liLimit);
    inputDate.value = "";
    inputText.value = "";
    saveDataLimit();
  }
}

function saveDataLimit() {
  const listsLimit = document.querySelectorAll(".limit");
  let todosLimit = [];
  listsLimit.forEach(list => {
    let todoLimit = {
      texts: list.innerText,
      completed: list.classList.contains("text-decoration-line-through")
    };
    todosLimit.push(todoLimit);
  });
  localStorage.setItem("todosLimit", JSON.stringify(todosLimit));
}