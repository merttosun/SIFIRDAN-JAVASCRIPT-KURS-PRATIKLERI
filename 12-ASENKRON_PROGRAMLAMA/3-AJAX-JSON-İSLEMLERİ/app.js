//çalışanları getir butonu

document.getElementById("ajax").addEventListener("click",getAllEmployees)

function getAllEmployees(){
    const xhr = new XMLHttpRequest ();
    xhr.open("GET","employees.json",true);
    

    xhr.onload = function () { 
        //tbodyyi seçiyoruz.
        let list = document.getElementById("employees");
        if(this.status == 200 ) {

            const employees = JSON.parse(this.responseText);
            
            //console.log(JSON.parse(this.responseText)); // employees.json dosyamızdaki elemanlar text olarak gelir yani string olarak
            // gelen texti json arrayine çeviriyor(json.parse)

            employees.forEach(function(employee){
                //seçtiğimiz innerhtml ine tr içinde td leri ekliyerek arayüze eklicez

                list.innerHTML += `<tr>
                                <td>${employee.name}</td>                
                                <td>${employee.department}</td>                
                                <td>${employee.salary}</td>                

                </tr>`;
            });


        }
    }
    xhr.send(); // get oldugu için içi boş
}