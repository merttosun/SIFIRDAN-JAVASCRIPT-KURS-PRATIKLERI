const person = { 
    age:25,
    tellAge : function () {
        console.log(this);
        console.log(this.age);
    }.bind(this) // thisimizi window objemize çekmiş olduk


    //burdaki this windowu gösterir.bindlamazsak

    
}

person.tellAge();

//bindsiz arrow functionla
const person2 = { 
    age:25,
    
    tellAge : () => {
        console.log(this);
        console.log(this.age);  // aynı sonucu verir
    }

    // normal bi function yazmış ve bindla thisi windowa baglamısız gibi sonuc verir

}

person2.tellAge();

