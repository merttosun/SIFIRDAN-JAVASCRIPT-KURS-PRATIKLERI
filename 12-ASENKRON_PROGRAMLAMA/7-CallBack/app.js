// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click", function(){
//     console.log("tıkla");
// })

//######################################################

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process1"); 
//         callback();

//     },3999);
// }  
                                                // 3 sn sonra process1 ondan 2 sn sonra process 2 çalışır                                    
// function process2(){
//     setTimeout(function(){
//         console.log("Process 2");
//     });
    
// }

// process1(process2);

//#########################################################

const langs = ["Python","Java","C++"];

function addLang(lang , callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function (lang) { 
            console.log(lang);
        });
    },1000);
}

// addLang("Javascript");
// getAllLangs();  // asenkron durum söz konusu olucak önce getAll sonra addLang çalışacak 
addLang("Javascript",getAllLangs); // callback olarak eklendiği için önce addLang çalışır sonra o getAllLangsi çağırır

// callbackli yapmazsak önce tüm dilleri listeler sonra ekler
