//MOUSE EVENTS
//title ı ve card-body yi seçelim. (iki tane oldugu içn qSelectorAll la seçip 1. indeksi alcaz),

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// console.log(cardBody,title);
//click event
title.addEventListener("click",run);

function run(e){
    console.log (e.type);//eventin tipini verir,click sonucunu döndürdü
}

//double click event

title.addEventListener("dblclick",dbrun);

function dbrun(e){
    console.log (e.type);
    console.log ( "Çift Tıklama"); // bu event click eventini de 2 kez uygular.

}

//mouse down eventi (mouse a basarken event oluşur) k

title.addEventListener("mousedown",mdrun); // clickle aynı

function mdrun(e){
    console.log (e.type);
    console.log("mouse a basıldı");
}

//mouse up (key up la aynı)

title.addEventListener("mouseup",murun);
function murun(e){
    console.log(e.type);
    console.log ("mouse'a basılıp çekildi");
}

//Mouseover (mouse üstüne geldiğinde)

title.addEventListener("mouseover",morun);

function morun(e){
    console.log(e.type);
}

//Mouseout (mouse üstüne gelip çıktıktan sonra event oluşur)

title.addEventListener("mouseout",moutrun);

function moutrun(e){

    console.log(e.type);
}

//mouseover ı birden çok element barındıran bi element üzerinde çalıştırırsak her elementin üzerinden geçtiğimizde çalışır

cardBody.addEventListener("mouseover",cbrun);
cardBody.addEventListener("mouseout",cbrun);

function cbrun(e){
    console.log(e.type);
}

//Mouse Enter & MOuse Leave
// mouseover ve mouseout tan farklı girdikten sonra 1 kez çalışır mouseenter çıkana kadar tekrar calısmz
cardBody.addEventListener("mouseenter",memlrun);

cardBody.addEventListener("mouseleave",memlrun);

function memlrun(e) {
    console.log(e.type);
}