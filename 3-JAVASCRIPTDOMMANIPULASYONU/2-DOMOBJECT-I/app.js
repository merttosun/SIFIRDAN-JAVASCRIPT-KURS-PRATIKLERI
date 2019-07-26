console.log(this.document); 
//console.log(document); şeklinde de aynı şeye ulaşırız

let value ;
value = document;
value = document.all; // tüm html etiketleri bize bir html collection olarak döner
//bu collection içinde bir array gibi gezinebiliriz
value = document.all.length;

console.log(value); // kaç element olduğunu verir 44 sonucunu verdi

value = document.all[0];
console.log(value); // html etiketini döndürür ilk eleman olarak

value = document.all[6];
console.log(value); // link elementini döndürür

value = document.all[document.all.length - 1 ]; //son elementi döndürür
console.log(value); //<scrip> elementini döndürür


const elements = document.all;
//tüm elementleri listeler forla
function elementleriListele(){

for (let i = 0 ; i < elements.length; i++){
    console.log(elements[i]);
}
}
//elekmentleriListele();

//for-eachle yapma
function forEachleElementListele(){
    const collections = Array.from(document.all); // document.all u array e çevirmeden forEach kullanamayız çünkü forEach sadece arrayler içindir

    collections.forEach(function(element){
        console.log(element);
    });

}
forEachleElementListele();

//elementlere erişme

value1 = document.all[8]; // bodynin collectiondaki sırası
value2 = document.body;
value3 = document.head;
value4 = document.location;
value5 = document.location.hostname;
value6 = document.location.port;
value7= document.URL;
value8 = document.characterSet;
console.log(value1,value2,value3,value4,value5,value6,value7,value8);