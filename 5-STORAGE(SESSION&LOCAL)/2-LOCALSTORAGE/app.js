//LOCAL STORAGE 

localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50); // sayı yazsak da değerler stringe cevrilip kaydedilir.


//get item

const value = localStorage.getItem("tekrar");

console.log(value);
console.log(typeof value);

//temizleme

localStorage.clear();

//

localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50);

console.log(localStorage.getItem("sport"));// bu anahtar olmadıgı için null döner

if(localStorage.getItem("sıpor") === null){
    console.log("veri bulunmuyor");
}else{
    console.log("Sorguladığımız veri bulunuyor.");

}

//local strogae a array yazma

const todos = ["todo1","todo2","todo3"]; 
localStorage.setItem("todos",todos); // her bir elemanı alıp virgül koyup stringe çevirip yazar

console.log(localStorage.getItem("todos")); // string döner todo1,todo2,todo3 şeklinde

//array olarak yazıp almak için

localStorage.setItem("todos",JSON.stringify(todos)); //array gibi yazar

//almak için

const value1 = JSON.parse(localStorage.getItem("todos"));

console.log(value1);

//Todo girin formunda input alıp localstorage a array olarak yazdırma

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
console.log(form,todoInput);
form.addEventListener("submit", addTodo);

function addTodo(e){ // local storageda todos keyi oluşturup eklediğimiz todoları array olarak saklar 
    const value = todoInput.value;
    let todos;

    if (localStorage.getItem("todos")=== null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));


    e.preventDefault(); // submit eventi olduğunda kendi sayfamıza gitmeyi engellemek için.
}





 