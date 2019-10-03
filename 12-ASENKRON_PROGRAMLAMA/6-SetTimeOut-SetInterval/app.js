//windows objesinin metodlarında setTimeout() ve setInterval() metodları vardır


//setTimeout

setTimeout(function(){
    console.log("Naber");
},2000); //sayfa acıldıktan 2 sn sonra naber yazar



// let i = 0 ;
// setInterval(function(){
//     // i++;
//     // console.log("tekrarlı Naber", i); // 1 sn aralıklarla sürekli calıstırır

// },1000);

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayi",i);

},1000);

//butonu seçelim

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value); // hangi intervalı durdurcagını veriyoruz parametre olarak
});



