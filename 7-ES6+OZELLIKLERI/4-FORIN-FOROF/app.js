const person = {
    name:"Mert TOSUN",
    age:25,
    salary:3000
};

const langs =["javascript","Java","Html","Css"];
const name = "Merdo";

//FOR IN 

for(let prop in person) {
    console.log(prop); // özellikler üzerinde gezinir. name-age-salary
}

for(let prop2 in person) {
    console.log(prop2,person[prop2]); // özelliklerin karşılıklkarını da verir. name Mert TOSUN age 25 salary 3000
}  

for (let index in langs){
    console.log(index); // 0 1 2 3 verir. 
 
    //yani for in dizilerde indeks üzerinden dolanır. objeler de özellikler üzerinden
    //langs[index] dersek değerlere ulaşırız.
}

for (let index in name){
    console.log(index); // 0 1 2 3  4 cıktısını verir
    // yani stringlerde de indeks üzerinden ilerler.
    //name[index] şeklinde değerlere ulaşabiliriz.harf harf
}

//FOR OF 
//Objelerde 

// for (let value of person){
//     console.log(value); // typeerror verir
//     //for of la objeler üzerinde iterasyon yapamayız

// }

for (let value of langs){
    console.log(value); // for in in tersine 0 1 2 3  yerine indekslerin karşılığını verir
    // js java html css değerlerini döndürür.
    //yani for in'in langs[value] yazılmış versiyonu gibi.
}

for(let character of name){
console.log(character); // stringin harflerini verir tek tek

}