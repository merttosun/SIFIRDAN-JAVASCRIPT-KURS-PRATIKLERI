//STATİK ( DURAĞAN ) METODLAR 

//static olmayan
class Matematik {
    cubeStaticOlmayan(x) {
        console.log("Statik olmayan metod:" + x*x*x);
    }
    static cube(y){
        console.log("Statik metod->" + y*y*y);
    }
    topla(x){
        console.log(x+x);
    }
}

const math = new Matematik();
math.cubeStaticOlmayan(2);

console.log(math); 

Matematik.cube(3);

//obje üzerinden (math onjesi uzerunden)

// const math = new Matematik();
// math.cube(4); // Uncaught SyntaxError: Identifier 'math' has already been declared hatası verir

//yani statik metodlarımıza obje üzerinden değil sadece sınıf üzeirnden erişebiliyoruz

// Matematik.topla(5); // bunu kullanmamız için de mutlaka object olusturmamız gerekiyo


//Object.create(); objectin üzerinden kullanılabiliyodu, yani create object üzerinden statik olarka yazılmış
//Math.sqrt() sqrt Math objesi üzerinde statik 

