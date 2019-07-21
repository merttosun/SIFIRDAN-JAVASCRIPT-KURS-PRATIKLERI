//
let value;
var now = new Date(); // Şu anki zamanı almanızı sağlar.


var date1 = new Date("4-27-1993 16:15:00");

var date2 = new Date("September 19 1993");

var date3 = new Date("9/19/1993");

//ay&gün bilgisi alma
value = date1;

value = date1.getMonth();
console.log(value);
value = date1.getDate();

console.log(value);
value = date1.getDay();
console.log(value);

//saat dakika saniye
value = date1.getHours();
console.log(value);
value = date1.getMinutes();
console.log(value);
value  = date1.getSeconds();
console.log(value);

//değiştirme
date1.setMonth(4);
date1.setDate(27);
date1.setFullYear(1994);
date1.setHours(12);
date1.setMinutes(00);
date1.setSeconds(30);

value = date1;
console.log(value);
//
