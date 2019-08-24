 //HTML SAYFAMIZA DİNAMİK OLARAK ELEMAN EKLEME
// id'si clear-todos <a> dan bir tane daha oluşturmak istiyoruz.bu <a> nın parenti id'si card-body olan <div> elementi

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>  aynısını oluşturmaya çalışıcaz

const newLink = document.createElement("a");
//class name e göre divi seçelim
const cardbody = document.getElementsByClassName("card-body")[1];//2 tane card-bodyli div oldugundan bizim seçiceğimiz 2. div o yüzden [1] koyduk

//linkimize id verelim
newLink.id = "clear-todos";
//classını btn danger yapalım
newLink.className = "btn btn-danger";
//googlea gitmesi için href verelim
newLink.href = "https://google.com.tr"
//yeni sekmede açılsın
newLink.target = "_blank";

//text-content

//newLink.textContent = "Farklı sayfaya git";

//cardbody.textContent = "sadıjaısjd"; // böyle yaparsak cardbodynin içindeki tüm elementler gider ve sadece bu yazı gelir


//card-body nin en son çocuğu olarak eklemek için

//Text Node  textContentten farklı olarka sayfanın başına sonuna arasına falan istediğimiz yere ekleriz

// const text = document.createTextNode("Naber");
// //sona eklemek için
// cardbody.appendChild(text);
// console.log(cardbody);
// console.log(newLink);

//newLink işlemlerine devam edelim

newLink.appendChild(document.createTextNode("Farklı sayfaya git")); //newLinke text node ekler

cardbody.appendChild(newLink);//newLinki son çocuk olarak ekler


//tüm taskları sil butonunun yanında "Farklı Sayfaya Git " yazılı kırmızı arkaplanlı(btn-danger) bir buton oluşturur ve tıkladıgımızda yeni sekmede googleı açar



