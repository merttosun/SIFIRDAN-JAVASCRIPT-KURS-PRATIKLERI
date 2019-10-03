//ajax, callback , http request


class Request {
    
    constructor (){
        this.xhr = new XMLHttpRequest;

    }
    //Get Request 
// // ilkel yöntemle
//     get(url){
//         this.xhr.open("GET",url); // baglantı açıldı
//         const temp = this; // aşağıda thisi kaybetmemek için tempe attık

//         this.xhr.onload = function () {
//             //console.log(this); // xml http rq gösterir.
//             // thisimizin request objesini göstermesi gerekiyordu
//             //birçok yöntemi var en ilkeli burdaki thisi dışarda yakalamak
            
//             if(temp.xhr.status === 200){ // dışardan thisi tutup burda kullandık
//                 console.log(temp.xhr.responseText);
//             }
//         }
//         this.xhr.send();



//     }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

//##############################################################################################
 
// ikinci yöntem this.xhr yerine this kullanmak

// get(url){
//     this.xhr.open("GET",url); // baglantı açıldı
    

//     this.xhr.onload = function () {
//         //console.log(this); // xml http rq gösterir.
//         // thisimizin request objesini göstermesi gerekiyordu
        
        
//         if(this.status === 200){ //this zaten xhr gösterdiği için this.xhr yerine sadece this.
//             console.log(this.responseText);
//         }
//     }
//     this.xhr.send();



// }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

// Üçüncü yöntem
// get(url){
//     this.xhr.open("GET",url); // baglantı açıldı
   

//     this.xhr.onload = function () {
        
//         console.log(this);
//         if(this.xhr.status === 200){ // dışardan thisi tutup burda kullandık
//             console.log(this.xhr.responseText);
//         }
//     }.bind(this);  // fonkun dışında getin kapsama alanında burda this rq objesini gösterir, bindla 
//     //biz burda this olarak request objesini göster diyoruz
//     this.xhr.send();



// }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

// dördün yöntem arrow function 
// ilkel yöntemle
// get(url){
//     this.xhr.open("GET",url); // baglantı açıldı
    

//     this.xhr.onload = () => {
        
//         console.log(this);
//         if(this.xhr.status === 200){ // dışardan thisi tutup burda kullandık
//             console.log(this.xhr.responseText);
//         }
//     };

//     this.xhr.send();



// }
// }

// const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");

// normal devam ediyoruz şimdi

get(url,callback){ 
    this.xhr.open("GET",url); // baglantı açıldı
    

    this.xhr.onload =  () => {
    
        
        if(this.xhr.status === 200){ 
            
            callback(null,this.xhr.responseText); // isteğimiz bitti
            //callbacke hata mesajı göndericez
        }else { 
            //hata durumunda 
            
            callback("Herhangi bir hata oluştu", null);
        }

    };
    this.xhr.send();



}
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        // herhangi bir hata yoktur
        console.log(response);

    }else{
        //Hata var
        console.log(err);
    }
    


});

