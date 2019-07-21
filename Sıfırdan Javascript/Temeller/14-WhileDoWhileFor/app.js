//while döngüsü
let i = 0;
while(i < 10){ //
    console.log(i);
    i += 1; // i++
}

let j = 10;
while(j>0){
    console.log(j);
    j--;
}

let z = 20;
while(z>0){
    console.log(z);
    z -= 2;

}

//Break & Continue
let x = 0;

while(x < 10 ){
    console.log(x);
    if(x == 5) break;
    x++;
}

let x1 = 0;

while(x1 < 10 ) {
    
    if (x1 == 4  || x1 == 6){
        x1++;
        continue;
    }
    console.log(x1);
    x1++;
}

// DOWHİLE DÖNGÜSÜ
//whiledan farkı. en az 1 kere çalışıp sonra şartı kontrol etmesi
let mt = 0;
do {
    console.log(mt);
    mt++;

}while(mt < 10);

const langs = ["Javascript", "React","PHP","Mysql"];
let index = 0 ;
while (index < langs.length){

    console.log(langs[index]);  
    
    index++;
}

//for döngüsü ile yapma

for(let index=0;index < langs.length; index++){
    console.log(langs[index]);
}

//for each döngüsü

langs.forEach(function(degisken){
    console.log(degisken);

});

//MAP FONKSİYONU

const users = [
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12}
];
// map fonksiyonu users dizisinin içinden user.name leri tek tek çekip names adlı array oluşturup ona atar
const names = users.map(function(user){
    return user.name; 
});
console.log(names);
//age özellikleri atar
const ages = users.map(function(user){
    return user.age;
});
console.log(ages);

//tüm arrayı atar
const kullanicilar = users.map(function(user){
    return user;
});
console.log(kullanicilar);

//FOR İN DÖNGÜSÜ
const kullanici ={
    name:"Mert",
    age:25
};

for(let key in kullanici){
    console.log(key,kullanici[key]); //kullanicinin propertilerini yazdırır
}

