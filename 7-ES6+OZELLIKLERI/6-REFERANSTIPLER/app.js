//REFERANS TİPLER
//bellekte belli bir yeri tutar
//primitive sadece o değeri taşıyan veri tipi

let a = "Mert";
let b = "Mert";

if (a === b){
    console.log("Eşit"); // eşit sonucunu verir. çünkü bu kıyaslama içindeki değerleri kontrol eder
}

//referans tiplerde farklı durum

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if (array1 === array2) console.log("Eşit"); // eşit sonucunu vermez. çünkü bellekteki adresleri kıyaslar ve eşit olmadıgına karar verir

//objelerde

const person1 = {
    name:"Mustafa",
    age:25
}

const person2 = {
    name:"Mustafa",
    age:25
}

if(person1 === person2){
    console.log("iki obje eşit"); // eşit sonucunu gene vermez.
}

//bir referans tiplerde eşitlik sınarken değerleri karşılaştırmak istiyosak bunu kendimiz yapmalıyız.


//

const cities = new Map();
cities.set("Ankara",06);
cities.set("İstanbul",34);

console.log(cities.get("Ankara")); // 6 sonucunu verir çünkü primitive veri tipi. 
//fakat 

cities.set([1,2,3],"Array");

console.log(cities.get[1,2,3]); // undefined sonucunu verir. çünkü mapin keyine koydugumuz değer referans veri tipindedir

//önce key i tanımlayıp sonra keyin adıyla onu cagırır değerini istersek sonucu alırız

const key = [3,5,7];

const rakamlar = new Map();
rakamlar.set(key,"sonuç değer");

console.log(rakamlar.get(key));// 

//referans veri tipleri bellekteki yere göre primitive veri tiplerinde değere göre kıyaslama yapılır.

