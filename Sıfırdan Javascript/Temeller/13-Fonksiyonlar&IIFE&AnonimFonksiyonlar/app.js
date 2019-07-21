//Fonksiyon Tanımlama

//function merhaba (){
  //  console.log("Merhaba Dünya");
//}
 


function merhaba(name, age){
    console.log(`İsim ${name} Yaş ${age}`);
}

merhaba("Mert",25);

merhaba("Aslı Eda İnanç",28);

merhaba();//isim ve yaş veirlmediği için undefined verir.


function selamunAleykum(name,age){
    if(typeof name ==="undefined") name ="Bilgi yok";
    if(typeof age==="undefined") age ="Bilgi yok";
    console.log(`İsim: ${name} Yaş: ${age} `);
}

selamunAleykum("Aslı Eda İnanç");

//undefined için kısa yol
function merhabalarkisa(name = "Bilgi Yok", age ="Bilgi Yok"){
  console.log(`İsim : ${name} Yaş: ${age}`);
}

merhabalarkisa("Erdoğan", 25);
merhabalarkisa();// isim: Bilgi yok yaş: bigli yok çıktısı verir.
merhabalarkisa("Murat");

//return kavramı
function square(x){
  console.log(x*x);
}
function cube(x) {
  console.log(x*x*x);
}

let a = square(12);//144 döner
a = cube(a); // NaN döner
console.log(a); // undefined döner
//returnlu yapma
function squarert(x){
  return x*x; // return aynı zaman da fonk.u sonlandırır
}
function cubert(x){
  return x*x*x;
}
let b = cubert(squarert(12)); //144 ün küpünü alır
console.log(b); //2985984 çıktısını verir


function merhabart(){
  return "Merhaba";
}

console.log(merhabart());

//function expression (değeri fonksiyona eşitleme)

const merhabafonk = function(name){
  console.log ("Merhaba " + name);
}
merhabafonk("Mert");

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function(name){
  console.log("Merhaba:" +name);
})("Mert");


const database ={
  host:"localhost",
  add: function(){
      console.log("Eklendi");
  },
  get: function(){
      console.log("Elde Edildi");
  },
  update:function(id){
      console.log("Güncellendi");
  },
  delete: function(id){
      console.log("Silindi");
  }
}

console.log(database.host);
database.add();
database.delete(10);
