//JS'de var ile tanımlama yaptığımız gibi let ve const ile de tanımlama yapabiliriz

var a;
a=20;

console.log(a); 
var name = "Mert TOSUN";
console.log(name);
name = "mehmet";  //var anahtar kelimesi ile tanımladığımız değişkenin değerini sonradan değiştirebiliyoruz.


//Let ####

let name2 = "MERT TOSUN";
console.log(name2);

//let name = "mehmet"; // --> hata verir. değiştirilemez.

let a2,b2 ;
a2 = 19 ;
b2 = 20;   //letle tanımlanan değişkenlere de var gibi değer sonradan atanabilir.
console.log(a2+b2);

//Const #### (SABİT)

const name3 = "mert tosunovski";
console.log(name3);
//name3 ="mert2 tosunovski"; //tekrar değer atanamaz hata verir.
//const a3;
//a3 = 10; // hata verir constta tanımlayabilmemiz ilk tanımlama yaparken değer verilir.

dizi = [1,2,3,4,5];

console.log(dizi);

dizi = [3,4,5,6,8]; // hata verir tekrar değer ataması yapılmaz.

dizi.push(6); //dizi nin yeri değişmediği için hata vermez dizinin sonuna 6 değerini ekler
console.log(dizi);


