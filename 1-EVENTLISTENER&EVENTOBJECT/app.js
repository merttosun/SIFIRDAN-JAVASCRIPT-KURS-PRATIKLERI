//eventler
//
//eski yöntem
const filterinput = document.getElementById("filter");

filterinput.onfocus  = function(){
    console.log("Naber"); //Bir Todo Arayın kutucuğuna tıklandığında Naber yazar.
}

// yeni yöntem

filterinput.addEventListener("focus",function(e){
            console.log("NaberYeni"); //aynı işlemi yapar. 2. parametreye fonksiyonu yazarız 
            console.log(e);  //bu e (event parametresini otomatik olarak veriyor) e burda eventin ne üzerinde çalıştıgını gösterir yazmasak da olur
            console.log(e.type); //eventin tipini verir
            console.log(e.target); //eventin nerde oldugunu verir
            console.log(e.target.placeholder);// eventin olustugu yerin placeholderını verir
            console.log(e.target.className); //oluştugu elementin classını verir




       
        });


//basşka bir event 
const todoform = document.getElementById("todo-form");
todoform.addEventListener("submit",submitForm);

function submitForm(e){ //eventimiz submit oldugundan ilk parametre submit ikinci parametremiz aşağıda tanımlıcagımız submirtform fonksiyonu
    console.log("Submit Eventi"); // bu şekilde bırakırsak sayfa yenilenip aynı şekilde kalır.formumuz default olarak sayafaya gidiyor action ı index.php vs gibi bi sayafaya yönlendirseydi o sayfaya gidecektik
    //anca bu sayfaya gitmesini istemiyoruz bu sayfada(index.php gibi hrhangi bir sayfa) bu sayafada kalması için defaultu yok saycaz

    e.preventDefault(); // submit eventinin default özelliklerini yok sayıp sayfamızın yenilenmesini önlemiş oluyoruz 

}