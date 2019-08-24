//Dinamik Element Sİlme
//todolarımızın bulundugu ul etiketini seçelim

const todoList = document.querySelector("ul.list-group"); //<ul> taginde list-group classında olanı seçer

const todos = document.querySelectorAll("li.list-group-item"); //<li> taginde list-group-item classında olanı seçer


//Remove methodu ile eleman silme
//ilk <li> yi yani ToDo 1 i silelim

todos[0].remove(); //ToDo 1 silindi
todos[1].remove(); //ToDo 2 silindi


//Remove Child
//son child ı silelim
todoList.removeChild(todoList.lastElementChild); // ToDo4 silinir

todoList.removeChild(todos[3]);

console.log(todoList);
console.log(todos);