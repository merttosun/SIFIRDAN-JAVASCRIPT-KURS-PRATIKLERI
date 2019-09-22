//PROTOTYPE MANTIĞI
//js oop'da c# ve java gibi dillerden farkı class tabalı değil prototype tabanlı bi prog dili
//jsde classlarımız yok. es6 da class yazımı var fakat yok. class şeklinde yazılıyor arkaplanda gene prototypelere dönüştürülür
//Prototype; önceki derste constr.(yapıcı) metod olusturup bu metoddan obje olusturmustuk
//bu oluşturdugumuz objenin özellikleri metodları vardır, bu objelerin bii özelliği de prototype özelliğidir
// prototype özelliği de bir objedir.
// biz bir constructor yaptıgımız prototype otomatik olarak gelir.

const object = new Object(); // en temel objemizi üretmiş oluruz

console.log(object); // herhangi bi özelliği olmayan objemizin şöyle bir çıktısı olur
// __proto__: Object

object.name = "Mert"; // objemizin name özelliği oluşur

// name: "Mert"
//__proto__: Object

// proto özelliğini açtıgımız

// ​constructor: ƒ Object()  --> bu aslında Object() constructor ı
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

// çıktısını verir 

// const object2 = new Object(); // başka bir obje de ürettiğimizde
// console.log(object2);  // prototypeda aynı metodları alır.

//en temel objemiz Object objesi

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function () { 
        console.log("Bilgiler Gösteriliyor");
    }
    this.toString = function(){
        console.log("Bu bir Employee Objesi");
    }
}

const emp1 = new Employee("Mert",25);
console.log(emp1); 



// age: 25
// name: "Mert"
// showInfos: ƒ () 
// __proto__: Object   çıktıyısını verir

// bu __protoya tıkladıgımızda
// constructor: ƒ Employee(name,age)
// __proto__: Object   // çıktısını verir 

//bu son __protoya tıkladıgımızda Object prototype ini verir
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
// çıktısını verir

// Yani biz bir obje olusturdugumuzda. Bunun bir prototype i oluyor, mesela Employee prototype
//Bu Employee prototypein Object prototypeine sahip
//yani bir prototype zinciri görülür. buna prototype chain diye geçer

// olmasının nedeni
//mesela

console.log(emp1.toString); // metodunu kullanabiliriz. bu metod object prototypeinde gelir

//bu sayede object prototypeindeki metodları miras almış oluruz

//prototype --> objeler arası kalıtım yapması sağlar. özellikleri ve metodları miras alırız
//her bir objemiz js deki object prototypeinden miras alır

// olmayan bir fonk denemiş olsaydık is not a function hatası verirdi


console.log(emp1.toString()); // "Bu bir Employee objesi" çıktısını verir
//ilk önce empin içine bakar toString metodunu görünce employeenin toStringi çalıştırır yoksa prototype 

