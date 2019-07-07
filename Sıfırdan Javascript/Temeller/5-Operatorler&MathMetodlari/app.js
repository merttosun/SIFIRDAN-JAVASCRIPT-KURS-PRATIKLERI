let value;
const value1 = 10;

const value2 = 4;

//Aritmetik operatörler

console.log("Toplama Operatörü, value1 + value2 = ", value1 + value2);
console.log("Çıkarma Operatörü, value1 - value2 = ", value1 - value2);
console.log("Çarpma Operatörü, value1 * value2 = ", value1 * value2);
console.log("Bölme Operatörü, value1 / value2 = ", value1 / value2);

//Math
// pi & E
valueM = Math.PI;
console.log(valueM);
valueE = Math.E;
console.log(valueE);

 //roun sayıları yuvarlamamızı sağlar.
valueR2 = Math.round(3.5);//4 e yuvarlar
valueR3 = Math.round(3.2);//3 e yuvarlar
valueR1 = Math.round(3.6);// 4 e yuvarlar
console.log(valueR1, valueR2, valueR3);
//floor & ceil

valueF1= Math.floor(3.2);//3 E YUVARLAR
valueF2=Math.floor(3.7);//3 E YUVARLAR
valueC1 = Math.ceil(3.2);//4 E YUVARLAR
valueC2 = Math.ceil(3.7);//4 E YUVARLAR
console.log(valueF1, valueF2, valueC1,valueC2);

//SQRT kök alma

valueSq = Math.sqrt(16); //4 verir
valueSq1 = Math.sqrt(31); //5.5677643628300215 verir
console.log (valueSq, valueSq1);

//Pow 
valueP = Math.pow(8,3); //8'in 3'üncü kuvvetini alır
valueP1 = Math.pow(4,2); //4'ün karesi
console.log(valueP,valueP1);

valueabs = Math.abs(-10); //tersini alır 10 döndürür
valueabs1 = Math.abs(10); //bu da 10 dönrürür.
console.log(valueabs, valueabs1);
//min & max 
valuemax = Math.max(10,-1, 100,32);//100 ü döndürür
valuemin = Math.min(10,-1,100,32); // -1 döndürür
console.log(valuemax,valuemin);


//Rastgele sayı üretme 
valuernd1=Math.random();//0 dahil 1 dahil olmamak üzere 0 ile 1 arasında rastgele sayı üretir
console.log(valuernd1);

valuernd2 = Math.random() * 20; // 0 ile 20 arasında sayılar üretir.0 dahil 20 değil
console.log(valuernd2);

valuernd3= Math.random() * 20 + 1 ; // 1 ile 21 arasında 20 de dahil.
console.log(valuernd3);

valuernd4 = Math.floor(Math.random() * 20 + 1); //1 ile 20 arasında integer(tam sayı)üretir.
console.log(valuernd4);



