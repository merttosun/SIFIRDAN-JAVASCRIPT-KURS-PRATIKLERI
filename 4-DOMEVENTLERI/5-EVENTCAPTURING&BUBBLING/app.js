//EVENT CAPTURING & BUBBLING
//BU ÖZELLİKLER JS YE ÖZGÜ DEĞİL DOCUMENT E ÖZGÜ ÖZELLİK

//EVENT BUBBLİNG (KABARCIKLANDIRMA)
//h5 de yaptıgımız bir click eventi parentına taşınır

//container ı seçelim classıyla

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");
// });
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

//kabarcıklanma sayesinde h5 e bastıgımızda eventimiz card body ye card row a ve container a da taşınmış oldu
//buna event bubbling denir

//EVENT CAPTURING VEYA DELAGATION,
//ÜST PARENTA BİR EVENT ATADIGIMIZDA, ALT ELEMENTLERDE DE ÇALIŞIR.

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run); // cardbodynin neresine basarsak basalım calıscak
//bu özellik sayesinde tek bir fonks.la dinamik olarak eklediğimiz elementler üzerinde de dinamik olarak işlem yapabiliyoruz.

//örn event listener ın içildiğinde nereye basıldığını anlayalım

function run(e){
    // console.log("Naber"); 

    if (e.target.className === "fa fa-remove"){ //carpıya basılıp basılmadıgını kontrol ediyo
        console.log("Silme İşlemi")
    }
    if(e.target.id === "filter"){
        console.log("Filtreleme İşlemi");
    }
    if(e.target.id === "clear-todos"){

        console.log("TÜm taskları Silme işlemi");
    }
    console.log(e.target);
}

//bu özellik sayesinde tek bir fonks.la dinamik olarak eklediğimiz elementler üzerinde de dinamik olarak işlem yapabiliyoruz.

//örn event listener ın içildiğinde nereye basıldığını anlayalım

