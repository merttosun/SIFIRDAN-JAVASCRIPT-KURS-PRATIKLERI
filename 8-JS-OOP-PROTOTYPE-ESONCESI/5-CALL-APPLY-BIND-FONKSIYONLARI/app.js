
//CALL-APPLY-BIND  bir fonksiyonu farklı objelerle kullanmamızı sağlarlar


const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
   // console.log(this); // windows (calldan önce)
   // console.log(this.number); // undefined(calldan önce)
    console.log(this.number1 + this.number2 + number3 + number4); //NaN döndürür
}


addNumbers.call(obj1,100,200); // 330  addNumbers ı obj1 e göre calıstırdıgımız için fonksiyonun içindeki this yerine obj1 geçicek

addNumbers.call(obj2,100,200); //370  addNumbers ı obj2 e göre calıstırdıgımız için fonksiyonun içindeki this yerine obj2 geçicek

// bu işlemi calla kullanmasaydık this windowu gösterecekti 


//APPLY

addNumbers.apply(obj1,[100,200]); // parametrelerimizi array şeklinde(argüman listesi) vermemiz gerekiyor.
addNumbers.apply(obj2,[199,2031]);

//BIND fonk sayesinde gene bir fonksu bir objeye baglıyoruz

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4; // returnle olması bi şey ifade etmıyor onemli değil

}

//bind call ve applydan farklı olarak bize kopya bir fonk üretir

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);


console.log(copyFunc1(100,200));
console.log(copyFunc2(150,300));













