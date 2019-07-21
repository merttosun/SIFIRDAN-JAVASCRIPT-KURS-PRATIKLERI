//Scope kavramı : bir değşikenin varoldugunu tanımlar

//Global scope: Herhangi bir fonksiyon veya if durumu içerisinde olmayan scope
var value1=10;
var value2=20;
const value3=30;

console.log(value1,value2,value3);
//fon scope u
function Func(){
    var value1=40;    // bellekte fonksiyon için ayrılan ayrı kısımda tanımlanır fonks scopeundadır.
    let value2=50;
    const value3 = 60;
    console.log(value1,value2,value3); //console.logdan sonra bu valuelar bellekten silinir.
}
Func();



function a(){
    //function scope
}

//block scope

if(true){
    //Block scope
    var a= 10;
    let b= 20;
    const c= 30;
    console.log(a,b,c);
}

console.log(a); // dışarda var olur
//console.log(b); // b is not defined hatası verir. varla tanımlanana dışardan da ulaşılabilir
//console.log(c); //dışarda erişilmez b gibi

if(true){
    var value1=40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3); // 40 50 60 sonucunu verir
}

console.log(value1,value2,value3); // 40 20 30 sonucu verir. varla tanımlanan blockda değeri değişir.
//let ve constla tanımlanan global değişkenin değernini korur

//önemli global değişkenleri var la tanımlayıp sonra block içerisinde aynı isimde tanımlarsak değeri kaybederiz

// const ve letle tanımlanan global ve block dğeişkenleri birbirine karışmaz. let ve const güvenlik için kullanışlı



