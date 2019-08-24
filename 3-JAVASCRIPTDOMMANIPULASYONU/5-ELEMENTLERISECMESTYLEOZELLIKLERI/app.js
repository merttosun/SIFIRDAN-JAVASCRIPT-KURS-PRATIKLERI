//<a> etiketi içindeki Tüm taskları temizleyin Butonu özelliklerini değiştirme

const tasksilelementi = document.querySelector("#clear-todos");
console.log(tasksilelementi);
console.log(tasksilelementi.id);
console.log(tasksilelementi.className);
console.log(tasksilelementi.classList);
console.log(tasksilelementi.classList[0]);
console.log(tasksilelementi.textContent);
//innerHtml
console.log(tasksilelementi.innerHTML);

//href
console.log(tasksilelementi.href);

//sTYLE VE ELEMENT ÖZELLİKLERİNİ DEĞİŞTİRME 
console.log(tasksilelementi.style);
tasksilelementi.className = "btn btn-primary"; //butonun rengi classına göre değişir mavi olur (bootstrapin classları) btn-warning --> kırmızı 
//text rengini değiştirme
tasksilelementi.style.color = "#000"; // rgb olarak siyah yapar

//margin özelliklerini değiştirme

tasksilelementi.style.marginLeft = "50px"; //buton 50 px sağa gider

//hrefini değiştirelim
tasksilelementi.href = "https://www.google.com.tr";
//yeni sekmede açması için
tasksilelementi.target = "_blank";

//elementin yazılarını görme  değiştirme
console.log(tasksilelementi.textContent);
//tasksilelementi.textContent = "Yeni Buton Yazısı"; // butonun üzerindeki yazı değişir.
//yazıya html ekleme

//tasksilelementi.innerHTML = "<span style= 'color:green'>silin</span>" // buton içindeki yazıyı yeşil silin yapar



//Lİ ELEMENTLERİNİ SEÇİP RENK VERME

const lielementleri = document.querySelectorAll(".list-group-item");
console.log(lielementleri); //nodelist döner 4 elemanlı

lielementleri.forEach(function(el){
    el.style.color = "red"; //her bir element üzerinde dolaşıp color ı red yapar
    el.style.background="#eee";
});

//sadece istediğimiz elementde işlem yapmak için

let element2 = document.querySelector("li:last-child"); // son çocugu alır
element2 = document.querySelector("li:nth-child(2)"); //ikinci çocugu alır
//tek sayı sıralarındaki elemanları seçme
element2 = document.querySelectorAll("li:nth-child(odd)"); //1 3 5 7... şeklinde giderek çıcukları seçer
//çift sayı sıralarındaki elemanları seçme
element2 = document.querySelectorAll("li:nth-child(even)");//2 4 6 8 .. şeklinde çocuk seçer




