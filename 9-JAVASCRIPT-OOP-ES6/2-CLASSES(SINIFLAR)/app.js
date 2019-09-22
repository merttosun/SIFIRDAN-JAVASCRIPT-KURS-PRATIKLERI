//CLASSLAR 
//classlar sadece yazım standartları olarak geldi, arkaplanda gene prototype e çevrilir
// bu olaya syntatic sugar tatlış yazım gibi bi şey

function EmployeeEski(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

EmployeeEski.prototype.showInfosEski = function (){
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş:" + this.salary);
}

const empEski = new EmployeeEski("Mert",25,4000);

console.log(empEski);


//YENİ YÖNTEMLE ( ES6 CLASSLA)

class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;

    }
showInfos(){
    console.log("İsim: " + this.name + " Yaş: " + this.age + "Maaş: " + this.salary);

}

}

const emp = new Employee("Mert",25,4000);

console.log(emp);

emp.showInfos();



