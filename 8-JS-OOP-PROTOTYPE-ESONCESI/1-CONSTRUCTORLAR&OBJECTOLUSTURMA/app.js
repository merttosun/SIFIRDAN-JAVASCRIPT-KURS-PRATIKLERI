//CONSTRUCTORS
// JS DE c# ve java kadar gelişmiş bir oop yapısı yok
//this anahtar kelimesi

console.log(window); // dediğimiz zaman windows objesi çıktısını alırız ve windows objesinin birçok özelliği ve metodları çıkar
//
console.log(this); // şuanda uzerınde bulundugumuz objeyi verir.
// bu  da windowu verir. çünkü js de global scopeda uzerınde bulundugumuz obje windows objesidir
//object literal yapısı
const emp1 = {
    name:"Mert",
    age:25,
    showInfos:function() {console.log("Bilgiler Gösteriliyor.")}
}
const emp2 = {
    name:"Aslı",
    age:27
}

//özellik eklerken

emp1.salary = 4000;
//metod calıstırma

emp1.showInfos();


console.log(emp1);// objemizin yapısı gelir. 

//gelişmiş programlarımızda cok daha fazla nesne olusturmamız gerekebilir.
//örn 100 tane emp olusturmak isteyebiliriz.
//bunun çözümü olarak yapıcı fonkslarımız var
//bunlar da constructor(yapıcı) metodlar

//constructor


function Employee(){//fonk adı büyük harfle başlamalı
    this.name = "Mert";//this burdaki objemizi gösterir.

}

//bu constr. dan obje üretmek için

const empl1 = new Employee(); // Employee den obje olusturmus oluyoruz

console.log(empl1); // name özelliğini verir değeri Mert tir
// Employee {name: "Mert"}
const empl2 = new Employee();

console.log(empl2); // aynı Employee {name: "Mert"}



// bu yöntem çok mantıklı değil çünkü olusturdugumuz tüm objelerin adı Mert olcak


//diğer yöntem

function Employee2(name,age,salary){
    this.name = name; // o anki objenin adını parametre olarak verilen name i, yapcak
    this.age = age;
    this.salary = salary;

    console.log(this); //Employee2 {name: "Mert", age: 25, salary: 4000} çıktısını verir
    // EMployee2 metodu hangi obje üzerinde çalışıyorsa this metodu o nesneyi çevirir
    this.showInfos = function (){
        console.log(this.name,this.age,this.salary)
        }
}

const employ1 = new Employee2("Mert",25,4000);
//const employ2 = new Employee2("Aslı",27,5000);

//console.log(employ1); // Employee2 {name: "Mert", age: 25, salary: 4000}

employ1.showInfos(); //Mert 25 4000 çıktısı verir.
