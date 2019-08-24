//inputumuzun attributeları

const todoinput = document.getElementById("todo"); //id'si todo olan elementi seçtik(input)

let element;
element = todoinput;
elementclasslari = todoinput.classList; //DOMTOKENLİST döndürür
elementclasssayisi = todoinput.classList.length;//1 sonucunu verir
//class ekleyelim

//todoinput.className = "form-control newClass"; // önceki classının adı form-control oldugu için class name ini değiştitirken öncekini de yazıp sonra yenisi yazarak ekleyebiliriz

//ya da DOMTOKENlist e add yapabiliriz

todoinput.classList.add("newClass"); // yeni classını ekler
todoinput.classList.add("newClass2");
todoinput.classList.remove("form-control"); //eski classını siler


console.log(element);
console.log(elementclasslari);
console.log(elementclasssayisi);

elementattribute = todoinput.placeholder;
console.log(elementattribute); //Bir Todo Girin yazısını döndürür
//aynı şeyi getAttribute metoduyla da yapabilirz
elementattribute2 = todoinput.getAttribute("placeholder");
console.log(elementattribute2); // Bir Todo Girin sonucunu verir gee
// placeholderın değerini değiştirelim
todoinput.setAttribute("placeholder","Naber");//Bir Todo Girin yazısını Naber? e değiştirir
console.log(todoinput);


//attribute ekleyelim

todoinput.setAttribute("title","input");
console.log(todoinput); // todoinput elementine title attribute u ekleyip değerini input yapar


//attribute varlığını kontrol etme

attributekontrolu = todoinput.hasAttribute("require");
console.log(attributekontrolu); // false döndürür

//attribute silme
todoinput.removeAttribute("name"); //name attribute unu siler
console.log(todoinput);