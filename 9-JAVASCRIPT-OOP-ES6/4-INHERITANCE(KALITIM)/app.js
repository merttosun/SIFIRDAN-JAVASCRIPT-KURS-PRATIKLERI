function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age  );
}

function Employee(name,age,salary){
    Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function (){
    console.log("Employee");
}

Employee.prototyp.showInfos = function () { 
    console.log("İsim: " + this.name + " Yaş: " + this.age  + " Maaş: " + this.salary);
}

const emp = new Employee("Mert", 25, 4000);

