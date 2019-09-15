//mapler
// her key e karşılığı gelen  bir value bulunur.
// key(anahtar ) - valeu ( değer)
//key herhangi bir veri tipi olabilir. objelerin özellikleri int olamaz ama mapin keyleri int olabilir obje olabilir her şey olabilir
//value de tüm veri tiplerinden olabilir.

let myMap = new Map();

console.log(typeof myMap); // object çıktısını verir.

console.log(myMap); // Map(0){}

const key1 = "Mert";
const key2 = {boy:190,kilo:80};
const key3 = () => 2;

//keyleri mape ekleme
//set
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");


//get 
console.log(myMap.get(key1)); // String Değer
console.log(myMap.get(key2)); // Object Literal Değer
console.log(myMap.get(key3)); // Function Değer  çıktıları verir.

console.log(myMap); // Map(3) {"Mert" => "String Değer", {…} => "Object Literal Değer", ƒ => "Function Değer"} çıktısını verir

console.log(myMap.size);// eleman sayısını verir. 3 çıktısı verir


//

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

//forEachle gezinme

cities.forEach(function(value,key) {
    console.log(key, value);
});

//  Ankara 5
//  İstanbul 15   çıktısını verir
//  İzmir 4

//forOf döngüsüyle gezin

for(let value of  cities){
    console.log(value); // her bir value yu bir array şeklinde verir. arrayin elemanları mapin key ve valuesudur
}

// (2) ["Ankara", 5]            
// (2) ["İstanbul", 15]    çıktısını verir
// (2) ["İzmir", 4]

for(let [key,value] of cities){ //Destructing
    console.log(key, value);
}

// Ankara 5
// İstanbul 15   çıktısını verir
// İzmir 4

//sadece keyleri almak için
for(let key of cities.keys()){
    console.log(key);
}

// Ankara
// İstanbul   çıktısını verir.
// İzmir

//sadece valueları almak için

for(let value of cities.values()){

    console.log(value);
}

// 5
// 15 çıktısını verir.
// 4

//Arrayden Map oluşturma
//iç içe dizi
const array = [["key1","value1"], ["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap); 

//{"key1" => "value1", "key2" => "value2"} çıktısını verir.


//Mapten Array Oluşturma

const cities2  = new Map();

cities2.set("Ankara",5);
cities2.set("İstanbul",15);
cities2.set("İzmir",4);

const array2 = Array.from(cities2);

console.log(array2);

//[Array(2), Array(2), Array(2)] çıktısını verir.

