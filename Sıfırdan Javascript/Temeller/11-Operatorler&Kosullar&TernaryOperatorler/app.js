// Karşılaştırma Operatörleri
// ==
// ===
// !=
// !==
// >
// < 
// >=
// <=
//

console.log( 2 == 2); //true
console.log("js" == "java");

console.log(2 == "2"); //TRUE DEĞER KARŞILAŞTIRIR
console.log ( 2 === "2"); //FALSE. HEM DĞEER HEM TİP KARŞILAŞTIRIR

console.log (4 > 2); //true
console.log( 2 < 4 ); //true
console.log (2 != 2); //falese
console.log ( 2 < 4 ); //true
console.log ( 4 < 2);  //false

console.log(2 <= 2);

//MANTINSAL BAĞLAÇLAR
//Not operatörü 
console.log (!(2 == 2)); //false
// AND operatörü 
console.log( 2 == 2 & 3 >= 1); //1

//OR Operatörü
console.log((4 == 2) || ("Ahmet" == "Ahmet")); // false veya true --> true

////KOŞULLAR////
const error = true;

if(error == true){
    console.log("Hata Oluştu");

}
console.log("Deneme");


const error2 = false;

if (error2 == true){
    console.log("Hata Oluştu");
}else {
    console.log("Hata Oluşmadı");
}

const user = "mt";

if (user == "mt"){
    console.log ("Kullanıcı Bulundu");

}
else {
    console.log("Kullanıcı Bulunamadı..");
}

//if-elseif

const process = "1";
//const process = "2";
//const process = "3";
//const process = "4";
if(process === "1"){
    console.log("İşlem 1");
}else if (process === "2"){
    console.log("İşlem 2");
}
else if (process === "3"){
    console.log("İşlem 3");
}
else if (process === "4"){
    console.log("İşlem 4");
}else{
    console.log("Geçersiz İşlem");
}

const number = 100;

if(number === 100){
    console.log("Sayı 100'e eşit");
}else { 
    console.log("Sayı 100'e eşit değil");
}

//Aynı İşlemi Ternary Operatörü ile yapma
console.log (number === 120 ? "120" : "Sayı 120 Değil");

//İF / ELSE / ELSE İF KOŞULLARIMIZ SADECE  1 SATIR İŞLEM BARINDIRIYORSA SÜSLÜ PARANTEZE GEREK YOK

if(number == 100)
console.log("sayı = 100");