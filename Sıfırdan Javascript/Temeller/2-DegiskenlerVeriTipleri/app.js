// //Değişker

// //var anahtar kelimesi ile değişken oluşturma

var a = 20;
var b = 10;
var c = 40;

console.log(a);
console.log(b);
console.log(c);
console.log(a,b,c);


console.log("Merhaba");

//PRIMITIVE (ilkel veri tipleri)

 var a = 10; //number veri tip
 console.log(typeof a); //a nın veri tipini yazdırır
 var b = 3.14; // number veri tipi
 console.log(typeof b);

 // String
  
 var name = "Mustafa";

 console.log(name);
 console.log(typeof name);

 //Boolean
var ba = true;

console.log(typeof ba );

//Null 
var na = null; // bir değer taşımıyor. null.

console.log(na); //fakat bunun sonucu object diye yazdırılır consoleda.


//Undefined  (tanımsız , değeri verilmeyen)

var una;

console.log(una);


//Referans Veri Tipleri
//Arrayler
var numbers = [1,2,3,4,5];

console.log(numbers);
console.log(typeof numbers); //object çıktısını verir. Referans veri tipleri typeof da object verir

console.log (numbers[0]); // ilk elemanı verir

//kendi değişkenimizi oluşturma

var person = {
   name: "Mert TOSUN",
   age:25
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(typeof person); //object tipi


//data object

var date = new Date ();

console.log (date);

// fonksiyon tanımlama

var merhaba = function(){
    console.log("Merhaba ");
}
console.log(merhaba);
console.log(typeof merhaba); // function tipi olarak verir

//primitive veri tipleri sadece o değişkenin değerini ifade ederken,
//referanss veri tipleri ise referanslar üzerinde bellekte gösterilen yerde değer tutulur.

var dizi =[1,2,3,4]; //şeklinde dizi oluşturduğumuzda a değişkeni bellekte ilk elemanın adresini işaret eder diğerleri sıralı şekilde dizilir.




























