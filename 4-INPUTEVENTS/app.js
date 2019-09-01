//input eventleri

const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load);//sayfamızdaki tüm document yüklendikten sonra eventimiz çalışır.

function load(e){
    console.log("Sayfa Yüklendi");
}

//Focus eventi bi alana tıkladıgımızda focus oldugumuzda çalışır

filter.addEventListener("focus",fcrun);

function fcrun(e){
    console.log(e.type);
}

//blur eventi. odaktan çıkınca çalışır

filter.addEventListener("blur",blrun);

function blrun(e){
    console.log(e.type);
}

//Paste eventi. herhangi bir yerden yazı vs yapıştırıldığında çalışır.


filter.addEventListener("paste",prun);

function prun(e){
    console.log(e.type);
}

//Copy Eventi. sayfadan bir yazı kopyalandığında çalışır

filter.addEventListener("copy",crun);

function crun(e){
    console.log(e.type);

}

//Cut Eventi. bir yazı kesildiğinde çalışır.
filter.addEventListener("cut",cutrun);

function cutrun(e){
    console.log(e.type);
}

//Select Eventi. yazı seçildiğinde çalışır
filter.addEventListener("select",slrun);

function slrun(e){
    console.log(e.target.value); //eventin çalıştığı kısmı yazdırır
    console.log(e.type);
}