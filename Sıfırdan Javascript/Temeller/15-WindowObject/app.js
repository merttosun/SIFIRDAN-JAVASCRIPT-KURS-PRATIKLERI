 //console.log(this); // window objesini kasteder
//console.log(this.alert("merhaba")); // üzerinde bulunduğumuz objeyi temsil eder
//console.log(alert());

//Alert

//alert ("merhaba"); // merhaba mesajı veren tamam butonuyla kapanan kutu getirir
function sorukutucugu(){
const cevap = confirm ("Emin misiniz?"); // soru sorar tamam ve vazgeç yanıtlarını verir.

 console.log(cevap); // confirm kutusundan gelen soruya tamam dersek true döndürür


 if(cevap){ // ok(tamam)a basıldıgında true döncek
    console.log("Silin Gitsin");
 }else {
     console.log("Silmeyin");
 }
}
//aynı şeyi if(confirm("Emin misiniz?")) yazarak da yapabilirdik
function kullanicidaninput(){
// Kullanıcıdan input alma

const cevap = prompt ("2 + 2 = ?"); // kullanıcıya 2+2 yi sorar girien inputu cevap değişkenine atar

 if (cevap == "4"){ // cevap 4 se true alıp doğru yazdırır
     console.log("Doğru");
 }
 else {
     console.log("Yanlış");
 }
}

function locationverisicekme(){
//location verilerini çekme

value = window.location;
value1 = window.location.host;
value2 = window.location.hostname;
value3 = window.location.port;
value4 = window.location.href;
console.log(value,value1,value2,value3,value4);
}

function sayfayiyeniletme(){
//sayfayı yeniletme
if (confirm("sayfa yenilensin mi ?")){
    window.location.reload();
}else { 
    console.log("Sayfa yenilenmedi");
}
}
function pencereBoyutuOgrenme(){
//outer -> kapama küçükltme tuşları dahil tüm pencerenin kapladıgı kısım
//outerheight; 
pikseluzunlugu = window.outerHeight;
console.log(pikseluzunlugu);// tarayıcı penceresinin uzunlugunu verir

//outerwidth
pikselgenisligi = window.outerWidth; 
console.log(pikselgenisligi); // tarayacı  penceresinin o anki genisliğini verir piksel olarak

//inner-->pencerenin kenar cubuklar hariç içerde kalan beyaz kısmı

//
innerpikselgen = window.innerWidth;
console.log(innerpikselgen);
innerpikseluzn = window.innerHeight;
console.log(innerpikseluzn);

}

function scrollDegeriBulma(){
valuex = window.scrollX; // x eksenin scrollx özelliğini kullanarak ne kadar sağa kaydırıldıgını bulur.
valuey = window.scrollY;
console.log(valuex, valuey);
}

//sorukutucugu();
//scrollDegeriBulma();
//pencereBoyutuOgrenme();
//sayfayiyeniletme();
//locationverisicekme();
//kullanicidaninput();
//sorukutucugu();