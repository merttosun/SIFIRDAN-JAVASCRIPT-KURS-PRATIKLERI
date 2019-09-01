//session ve local storage'ın çalışma mantıkları aynı
//farklı local storage'da biz değerlerimizi depoladıgımız zaman bu değerleri özellikle silmedigimiz sürece sabit kalır. istersek js tarafından sileriz istersek browserda local storage ı açıp sileriz
//session storage oturum anlamına gelir, oturum açık kaldıgı sürece veriler session storageda kalır. sekmeyi kapatırsak veya komple browsera kapatırsak bunlar siliniyor.
//session storage key value özellikleriyle verilerimizi depolar meyve:kiraz gibi

//SESSION STORAGE key & value

console.log(window); // consoleda cıkan windowa tıkladıgımızda sessionstorage ın burda bi obje oldugunu görürüz.
console.log(sessionStorage); // (windows.sessionstorage) diyerek de ulaşabilirz.

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");
// butonlarımızı seçmiş olduk

//Inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    //keydeki değeri alıcaz valuedakı değeri alıcaz ve session storage a eklicez
    sessionStorage.setItem(addkey.value, addvalue.value);

}
//aynı key i tekrar yazarsak, o keyin value su değişir yeni bir satır eklenmez


function deleteItem(e){
     sessionStorage.removeItem(deletekey.value);

}

function clearItems(e){
    sessionStorage.clear();
}