//Spread Operator

const langs = ["Python", "C++", "Java", "Php"];

console.log(langs);

console.log(langs[0],langs[1],langs[2],langs[3]);

console.log(...langs); // yukardaki gibi ayrı ayrı yazdırmısız gibi çıktı verir

const langs2 = ["Javascript","C#",...langs];

console.log(langs2); // ...langs kullanımı langs dizisini oldugu gibi diğerine eklememize de yarar.
//

const numbers = [1,2,3,4,5,6,7,8,9];

//önceli derste gördüümüz destructingle

const [a,b] = numbers;

console.log(a,b);
console.log(numbers);

const [c,d,...numbers2] = numbers;

console.log(numbers2);

//arrow function oluşturalim 

const addNumbers = (a,b,c) => console.log(a+b+c);

const sayilar = [100,200,300];

addNumbers(numbers[0],numbers[1],numbers[2]);// eski yöntem

addNumbers(...numbers);
