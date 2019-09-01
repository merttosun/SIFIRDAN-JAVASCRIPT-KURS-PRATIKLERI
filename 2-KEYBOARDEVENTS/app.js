//KLAVYE EVENTLERİ
//Key Press (harf ve sayılara bastığımız anda event oluşur)
document.addEventListener("keypress",run); //sadece harf ve sayılar için
function run(e){
    console.log(e.which);//hangi tuşa bastığımızı görmek için basılan karakterin ASCI değerini verir 
    console.log("Naber"); //herhangi bir tuşa bastıgımızda  konsola "Naber" yazar.
    console.log(e.key);//karakter olarak verir
}
 
 
//Key Down diğer tuşlar da dahil. tuşa bastığımız anda tetiklenir
document.addEventListener("keydown",run2);

function run2(e){
    console.log(e.key);
}

//Key Up bir tuşu bıraktığımız anda event başlar

document.addEventListener("keyup",run3); 

function run3(e){
    console.log(e.key);
}


//Bir Todo Girin kısmına yazı yazdıkca Todo List yazısı değişecek ama  harfi bırakınca

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changetext);

function changetext(e){
    ///console.log(e.target);//bası çektiğimiz anda eventin nerde oluştuğunu yazdırır.
    header.textContent = e.target.value; // card-headerin yazısı biz tuşlara basıp çektikçe yeniler.
    console.log(e.target.value); //basıp cektimiz anda inputda yazan yazıyı çeker
   // console.log(e.key);
}