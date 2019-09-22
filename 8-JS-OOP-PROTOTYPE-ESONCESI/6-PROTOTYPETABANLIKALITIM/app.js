function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: " +this.age);


}

// const person = new Person ("Mert",25);
// console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    // Person.call(this,name,age);  aynı işlemi callla yapmak.
    this.salary = salary;
}

//person ın prototypeindeki metodları miras alması için
Employee.prototype = Object.create(Person.prototype);
//artık personın tüm metodlarını miras almış oluyoruz
Employee.prototype.toString = function () {
    console.log("Employee");
}



//Override  (iptal etme)
// person'ın showInfosunu değil kendi yazdıgımız show infos u kullanmak için

Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: " +this.age + " Maaş: " + this.age);

}


const emp = new Employee("Mert",25,3000);

// console.log(emp);

emp.showInfos();//persondan aldııgımız miras // salary yi yazamadık. 
emp.toString(); // objectden aldıgımız miras

console.log(emp);


// Employee {name: "Mert", age: 25, salary: 3000}
// age: 25
// name: "Mert"
// salary: 3000
// __proto__: Person
// showInfos: ƒ ()
// toString: ƒ ()
// __proto__:
// showInfos: ƒ ()
// constructor: ƒ Person(name,age)
// __proto__:
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