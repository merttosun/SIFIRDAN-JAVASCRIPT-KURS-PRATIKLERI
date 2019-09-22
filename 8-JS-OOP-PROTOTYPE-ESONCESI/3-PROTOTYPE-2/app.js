function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("İsim: " + this.name + "Yaş: " + this.age);

    }
}

const emp1 = new Employee("Mert Tosun",25);
const emp2 = new Employee("Aslı İnanç", 27);

console.log(emp1);
console.log(emp2);

// age: 27
// name: "Aslı İnanç" 
// showInfos: ƒ ()     çıktısını verir
// __proto__: Object

// fonksiyonumuzu constructorın içine yazdıgımızda 
//her yeni obje ürettiğimizde (emp1,emp2) belleğimizde showInfos fonksundan bir tane daha oluyor
// çok sayıda üretceğimizde belleğimizde fazla bi doluluk olcak


//metodumuzu prototypin içine yazarsak belleğimizde sadece 1 tane yer kaplıcak
// çünkü bütün objelerimiz aynı prototype sahip.
//prototyplerin diğer bir avantajı da budur

function Employee2(name,age){
    this.name = name;
    this.age = age;
    
}

Employee2.prototype.showInfos = function () { 
    console.log("İsim : " + this.name + "Yaş: " + this.age);
}

const emp2v1 = new Employee2("Mert Tosun",25);
const emp2v2 = new Employee2("Aslı İnanç", 27);

console.log(emp2v1);
console.log(emp2v2);



// age: 25
// name: "Mert Tosun"
// __proto__: Object çıktısını verir

//showInfos metodumuz prototype in içnidedir

emp2v1.showInfos();  // dediğimizde önce emp2v1 e gider onun showInfos metodunun olmadıgını görünce
// prototypeine gider ordaki showInfos u bulup çlaıştırır.

