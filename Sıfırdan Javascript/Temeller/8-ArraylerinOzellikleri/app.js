//arraylerin özellikleri
let value;

const numbers = [43,56,33,23,44,35,5];
const numbers2 = new Array(1,3,5,7,9,11); // diğer oluşturma yöntemi

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers.length;
console.log(value);

eleman1 = numbers[0];
console.log(eleman1);
eleman3 = numbers[2];
console.log(eleman3);
dizininsonelemani = numbers[numbers.lenght - 1];

//herhangi bir indeksteki değeri değiştirme

numbers[2] = 1999;
console.log(numbers[2]);

 //indexOf

 indeksdegiskeni = numbers.indexOf(1999);
console.log(indeksdegiskeni);

//Arraya Değer Ekleme - Push & Unshift
numbers.push(2000); // sonuna ekleme

numbers.unshift(3000); // en başa ekler
numbers.unshift(1453); // en başa ekler
console.log(numbers);

//Arrayden Sonunda Değer Silme
numbers.pop(); // sonundaki değeri siler
console.log(numbers);

// Arrayin Başından Değer silme
numbers.shift();
console.log(numbers); 

//Belli bir aralığı silme

numbers.splice(0,3); // ilk 3 elemanı siler. 0,1,2 indeksteki elemanları
console.log(numbers); 

//diziyi tersine çevirme

numbers.reverse();
console.log(numbers);

// sıralama

//numbers.sort();
//console.log(numbers); // baştaki rakamın küçükliüğüne göre küçükten büyüğe sıralar.tam sıralama vermez

kücüktenbüyügesiralanmis = numbers.sort(function(x , y){
    // Küçükten büyüğe
    return x - y ; //ikili olarak değerlendirir ilk iki indeksteki işlem eksi verince küçükten büyüğe çevirir

});
console.log(kücüktenbüyügesiralanmis);
büyüktenkücügesiralanmis = numbers.sort(function(x , y){
    // büyükten küçüğe
    return y - x ;

});
console.log(büyüktenkücügesiralanmis);


