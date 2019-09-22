//bir obje oluştururken prototypeini başka bir objeden almak istiyorsak 
//object.create i kullanabiliriz.

const obj = {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}

console.log(obj);

//yeni bir obje oluşturup bunun prototypeini  önceki objeye göre yapalım

const emp = Object.create(obj); // test1,test2 ve protoyu kalıtım yapmış oluruz

console.log(emp); // emp objemizin protosunda

//<prototype>: Object { test1: test1(), test2: test2() } vardır.

emp.name = "Mert";
emp.age = 25;

// bu şekilde başka özellikler de ekleyebiliriz.


//DAHA ZOR ÖRNEK

function Person(){
    //boş bir constructor oluşturduk
}
//prototyplerini verdik
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}
//constructorından yeni bir nesne oluşturduk.

function Employee(name,age){
    this.name = name;
    this.age = age;

}
//employee nin test1 ve test2 yi miras alması için prototypein gösterdiği yerin object olmaması lazım person ın prototypeini göstermesi lazım

Employee.prototype = Object.create(Person.prototype);

//zincirleme bir şekilde test1 ve test2 yi miras aldık
Employee.prototype.myTest = function (){
    console.log("MyTest"); // objenin protosunun içinde myTest function ı cıkar artık
}

const emp1 = new Employee("Mert",25);

emp1.test1(); // kalıtım yaptıgımız için "Test 1" çıktısını alırız

console.log(emp1);
//çıktılarını açarsak



// age: 25
// ​
// name: "Mert"
// ​
// <prototype>: Object {  }



// <prototype>: Object { test1: test1(), test2: test2(), … } */}



// constructor: function Person()​​​
// test1: function test1()​​​
// test2: function test2()​​​
// <prototype>: {…}
// ​​​​
// __defineGetter__: function __defineGetter__()
// ​​​​
// __defineSetter__: function __defineSetter__()
// ​​​​
// __lookupGetter__: function __lookupGetter__()
// ​​​​
// __lookupSetter__: function __lookupSetter__()
// ​​​​
// __proto__: 
// ​​​​
// constructor: function Object()
// ​​​​
// hasOwnProperty: function hasOwnProperty()
// ​​​​
// isPrototypeOf: function isPrototypeOf()
// ​​​​
// propertyIsEnumerable: function propertyIsEnumerable()
// ​​​​
// toLocaleString: function toLocaleString()
// ​​​​
// toSource: function toSource()
// ​​​​
// toString: function toString()
// ​​​​
// valueOf: function valueOf()
// ​​​​
// <get __proto__()>: function __proto__()
// ​​​​
// <set __proto__()>: function __proto__()


