//es6+ ile gelen fonksları daha kısa yazma özelliği
//eski hali
const merhaba = function(){
    console.log("merhaba");
}

merhaba();

const selam = () => {
    console.log("arrow function selam");

}
selam();

const parametreliArrow = (firstName) => {
    console.log("parametreli arrow function. Selam ", firstName);
}

parametreliArrow("Aslı");

const tekParametreliAlternatifArrow = firstName => {
    console.log("paranteze gerek kalmadan yazılır");
}

const cokParametreliArrow = (ilkparametre,ikinciparametre) => {
    console.log(ilkparametre, ikinciparametre);
}

cokParametreliArrow("Selam", "Aslı connem");

//tek satır kod varsa süslü paranteze de gerek yok

const tekSatir = firstName => console.log("Merhaba", firstName);
// iki parametre için parantez lazım.
tekSatir("parametre");

const cube = function(x){
    return x * x *x;
};
console.log(cube(4));

const kup = x => {
    return x * x * x;
}
console.log(kup(3));

//return kullanmadan ve tek satırda yazmak.

const kare = x => x * x ;

console.log(kare(16));