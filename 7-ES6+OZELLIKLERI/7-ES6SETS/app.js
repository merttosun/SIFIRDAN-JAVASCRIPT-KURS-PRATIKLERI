//SETLER (KÜMELER)
//bir değeri sadece bir defa taşırlar

const myset = new Set();

console.log(myset); // Set(0) {}

myset.add(100);

console.log(myset); // Set(1) {100}

myset.add(100); // hata vermez ama tekrar 100 eklemez içine

myset.add(3.14);  // Set(2) {100, 3.14}
console.log(myset);

myset.add("Mert"); // Set(3) {100, 3.14, "Mert"}
console.log(myset);

myset.add(true);   // Set(4) {100, 3.14, "Mert", true}
console.log(myset);

myset.add([1,2,3]);
console.log(myset); //Set(5) {100, 3.14, "Mert", true, Array(3)}

myset.add({a:1,b:2});
console.log(myset); //Set(6) {100, 3.14, "Mert", true, Array(3),Object}


//bunun yerine

const myset2 = new Set([100,3.14,"Mert",true,[2,4,5,6],{a:3,b:5}]);
console.log(myset2);  // Set(6) {100, 3.14, "Mert", true, Array(4), …}Array

//boyut için

console.log(myset);

//Delete metodu

myset.delete("Mert");
console.log(myset); // Set(5) {100, 3.14, true, Array(3), {…}}

//sette olan bi değeri sorgulamak için
//has metodu
console.log(myset.has("Mert"));//yoksa false
console.log(myset2.has("Mert"));//varsa true döner

//arrayi sorgularken 

console.log(myset.has[1,2,3]); // false döner çünkü referans tipidir adresi değerlendirir.

//For Each

myset.forEach(function(value){
    console.log(value); // tüm seti getirir.
})

//for of 

for(let value of myset){
    console.log(value);
}

//Setlerden Array Oluşturma

const array = Array.from(myset);
console.log(array);