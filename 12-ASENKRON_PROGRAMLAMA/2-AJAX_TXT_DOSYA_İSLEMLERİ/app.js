//HTTP response STATUS kodları
// 200: OK
// 403: FORBIDDEN 
// 404 : NOT FOUND 
// 505 INTERNAL SERVER ERROR


//readyState properties
// Holds the status of the XMLHttpRequest. Changes from 0 to 4:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){
    // xml http request
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    

    //eski yöntem 
    xhr.onreadystatechange = function() { // readyState imiz değiştiğinde direk olarak çalıştırılacak fonskyion

        //console.log(this.readyState); // burda this xhr objemizi gösterir

        //1
        //2
        //3     çıktısını verir. Yani 1 server bağalntısı sağlandı. 2 isteğimiz alındı. 3 istek işlenmeye başlandı 4.  yanıt geldi
        //4

        // console.log(this.status);
        // 0
        //  200   çıktısını verir. 0 herhangi bi request gönderilmediğini gösterir.200 ok sonucu verir
        
        //txt imizi almak içni kontrol 

        if(this.status == 200 && this.readyState == 4 ) {
            // Response hazır olduğunda

            console.log(this.responseText); //
            // Bu bir text dosyasıdır. şeklinde example.txt dosyasınn içindeki değeri dööndürür.

        }
    }

    // Response umuz hazır oldugunda çalışacak fonk için yeni yöntem
    xhr.onload = function(){
        // burda readyState zaten 4 olucak. statusumuzu herhangi bi hata olmasın verimiz normal şekilde gelsin diye kontrol ediyoruz.

        if(this.status == 200){
            // console.log(this.responseText);
            //Bu bir text dosyasıdır. çıktısını verir gene
            //index.html deki divimize example.txt ten aldıgımız veriyi yazdırmak için
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    xhr.onprogress = function () { 
        // readyStateimiz 3 oldugunda çalışacak fonks.
        console.log("Process İşleniyor.", this.readyState) ;
    }

    // ilk parametre hangi requesti yapıcagımızı (get) daha sonra hangi dosyadan alıcagımızı (example.txt) son parametre true ise işlem asenkron
    
    xhr.open("GET", "example.txt", true);//baglantı açıyoruz
    
    xhr.send();// baglantımızı yolluyoruz. get request yaptıgıız için içnie bi şey yazmıyoruz




});