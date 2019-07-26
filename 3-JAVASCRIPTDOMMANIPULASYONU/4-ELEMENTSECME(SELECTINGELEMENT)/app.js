//Elementi İD'ye göre seçme
//sayfamızdaki formumuzu seçelim
//form
let elementform = document.getElementById("todo-form");
console.log(elementform); // <form id="todo-form" name="form"> şeklinde döner

//id sini yanlış yazarsak null döndürür
//task 
let elementtask = document.getElementById("tasks-title");
console.log(elementtask); // <h5 id="tasks-title" class="card-title"> çıktısını verir

//ELEMENTİ CLASS A GÖRE SEÇME
let elementclassagore = document.getElementsByClassName("list-group-item");
console.log(elementclassagore); //html collection döndürür. HTMLCollection(4) [ li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between ] sonucunu verir. list-group-item classı olan tüm elementleri döndürür

//div
let elementclassagorediv = document.getElementsByClassName("card-header");
console.log(elementclassagorediv); //HTMLCollection [ div.card-header ] olarak döndürür

// TAGA GÖRE ELEMENT ÇEKME
let elementtagagore = document.getElementsByTagName("li");
console.log(elementtagagore); // li tagindeki tüm elementleri döndürür

let elementtagagore2 = document.getElementsByTagName("div");
console.log(elementtagagore2); // div tagindeki tüm elementleri döndürür

//TEK METHODLA BU ÜÇ İŞLEMİ YAPABİLİRİZ
//QUERY SELECTOR 
// CSSDE KULLANDIĞIMIZ SELECTORLARI KULLANICAZ. 
//query-selector tek element seçer. aynı özellikteki elementlerin ilk olanını dönrürür

let elementqs = document.querySelector("#todo-form"); //id ye göre
console.log(elementqs);

let elementqs2 = document.querySelector(".list-group-item"); //class a göre
console.log(elementqs2); //sadece ilk li yi getirir

let elementqs3 = document.querySelector("li");
console.log(elementqs3); //sadece ilk li yi getirir

//hepsini getirmek için

let elementqs4 = document.querySelectorAll(".list-group-item");
console.log(elementqs4);

//bunun içinde array gibi forEachle gezinebiliriz

elementqs4.forEach(function(el){
    console.log(el);
});


