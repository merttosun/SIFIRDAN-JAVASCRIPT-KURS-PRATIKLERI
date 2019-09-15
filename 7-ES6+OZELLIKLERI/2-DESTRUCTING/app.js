//DESTRUCTİNG
//bizim arraylerimizin veya objelerimizin içinden değer almak için kullandıgımız kısa bir yol
let number1,number2;

arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

//Destructing yapısı
[number1,number2] = arr; // arrın eleman sayısına bakmadan number1 arrın ilk indeksine number2 arrın 2. indeksine eşitlenir.



console.log(number1,number2);

//dirke tanımlarken de destructing yapabiliriz.

const [sayi1,sayi2] = arr;

console.log(sayi1,sayi2);


//OBJECT DESTRUCTING

const sayilar = { 
    a:10,
    b:20,
    c:30,
    d:40
};

//const {deger1,deger2,deger3} = sayilar;
//console.log(deger1,deger2,deger3); // undefined verir.

//obje destructing için objenin özelliklerinin adını degiskene vermemiz lazım
//yani

const {a,b,c,d} = sayilar;

console.log(a,b,c,d);

// objenin özelliğinden farklı bi isim vermek istiyorsak

const {a:deger1, b:deger2, c:deger3} = sayilar;

console.log(deger1,deger2,deger3);


//function destructing with arrow functions


const  getLangs = () => ["Python","Java","C++"]; // tek bi returnu olunca süslü paranteze gerek yok

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);

//Obje

const person = {
    name:"Mert TOSUN",
    year:1994,
    salary:3000,
    showInfos : () => console.log ("Bilgiler gösteriliyor")

}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);
bilgileriGoster();