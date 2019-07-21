//obje oluşturma
let value ;
const programmer = {
    name : "Mert TOSUN",
    age : 25,
    email : "mert.tosun@windowslive.com",
    langs : "Python, Java, Javascript",
    
    adress : {
        city : "Ankara",
        street : "Gün Sazak Caddesi",
        aprtment : "Pınar Apartmanı"
    },

    work : function(){
        console.log("Programcı Çalışıyor..");
    }

}

//özelliklerine erişme

 value = programmer;
  console.log(value);
 value =  programmer.email;
console.log(value);
diller = programmer.langs;
console.log(diller);

sehir = programmer.adress.city;
console.log(sehir);

programmer.work(); //programcı çalşıyor çıktısını veirr konsolda

//objelerden oluşan array
const programmers = [ 
    {name: "MERT TOSUN", age:25},
    {name : "ASLI EDA İNANÇ", age:28}
];

ilkprogramci = programmers[0];
console.log(ilkprogramci);
arrayinobjesininozelligi = programmers[1].name;
console.log(arrayinobjesininozelligi);
