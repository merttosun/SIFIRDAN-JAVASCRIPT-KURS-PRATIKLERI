let value;
value = 123;
console.log(typeof value);
//veri tiplerini stringe çevirme

value = String(123); // 123 stringe çevirip value değişkenine atar.
console.log(typeof value);

value = String(true); //true boolean değişkenini stringe çevirip value değişkenine atar
console.log(typeof value);
value = String(false); //false için aynısını yaoar
console.log(typeof value);
value = String (3.14); //3.14 ü stringe çevirip value ya atar
console.log(typeof value);

//fonksiyonu stringe çevirme

value = String(function (){console.log()}); //normalde foknsiyon olan kodu unction (){console.log()} yazısına çevirir.
console.log(value);

//diziyi stringe çevirme
value = String ([1,2,3,4]);

value =(10).toString(); // aynı işi yerine getirir
value =(3.14).toString();

// Veritiplerini Sayılara Çevirme
value = Number("12342424"); // stringin içinde sadece sayılar olduğu için çevrilir.
console.log(value);
console.log(typeof value);

value = Number(null); // 0 a çevirir
console.log(value);
console.log(typeof value);
value = Number(undefined); // tipi number yazar fakat Not a number sonucu verir
console.log(value);
console.log(typeof value);
value = Number (function(){console.log()});
console.log(value); // NaN değeri döndürür
console.log(typeof value); // number çıktısı verir

value = Number("3.14");
console.log(value);
console.log(typeof value);

value = parseInt("3");
console.log(value);
console.log(typeof value);


const a = "Hello " + 34; // js 34 ü otomatik olarak stringe çevirir 
console.log(a);
console.log(typeof a); // string çıktısı verir

const b = Number("34") + 53;
console.log(b); // 87 
console.log(typeof b); // number çıktısı verir
 
