//ul yi seçeli
const todoList = document.querySelector(".list-group");

console.log(todoList);
// çocuklar arasında gezinme
const todo = document.querySelector(".list-group-item:nth-child(2)"); // list-group-item classında olan elementlerdan 2. sıradaki çocugu çeker

console.log(todo);

//card-rowu seçelim
const cardrow = document.querySelector(".card.row");
console.log (cardrow);

//CHILD NODES

const childvalue = todoList.childNodes;
console.log (childvalue); // 9 tane child çeker. (todoList yukardaki değişken)
//aslında 4 li var ama satır atlamaları da sayıyor
console.log(childvalue[0]); //texti döndürür

//satır atlamarını saymasını istemıyorsak
//childNodes yaptıgımız zaman satır atlamalarını alır. children dediğimiz zaman almaz

const childvalue1=todoList.children;
console.log(childvalue1); ///4 sonucunu verir text ve satır atlamaları saymaz sadece elementleri sayar
//son child ına ulaşalaım
console.log(childvalue1[childvalue1.length -1]);
//todolistesinin 3. çocugu olan Todo3 elementinin textini değiştirelim
const textdegistirme = childvalue1[2].textContent = "Değiştir";
console.log(textdegistirme); // "Değiştir" sonucunu verir 

valuecard  = cardrow;
console.log(valuecard);
valuechildren = cardrow.children;
console.log(valuechildren); // 3 elemanlı html collection döndürür.
console.log(valuechildren[2]);
valuechichi = cardrow.children[2].children[1];
console.log(valuechichi);
//yazı değiştir
value1 = cardrow.children[2].children[1].textContent = "Burası da değişti";


todo1 = todoList;
console.log(todo1);
todoilkcocuk = todoList.children[0];
console.log(todoilkcocuk);
//ilk cocuga ulasmanın kısa yolu
todoilkcocukkisayol = todoList.firstElementChild;
console.log(todoilkcocukkisayol);
todosoncocukkisayol = todoList.lastElementChild;
console.log(todosoncocukkisayol);

//kac elamnı oldugunu döndürme kısa yol
elementsayisi = todoList.childElementCount;
console.log(elementsayisi); // 4 döndürür

//anneye ulasma
child1= cardrow;
parent1 =child1.parentElement;
console.log(parent1);
birustparent =parent1.parentElement;
console.log(birustparent);

//kardeşe ulaşma
child2 = todo;
kardes1 = child2.previousElementSibling; //bir önceki kardeşine gider
console.log(kardes1);
kardes2 = child2.nextElementSibling;
console.log(kardes2);
//iki kez pre ya da next 
kardes3 = child2.previousElementSibling.previousElementSibling;
console.log(kardes3);//null döner çünkü todo1 in başka "önceki" kardeşi yok

