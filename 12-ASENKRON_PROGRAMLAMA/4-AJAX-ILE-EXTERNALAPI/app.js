//butonu seçicez
document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    
    xhr.onload = function (){
        if(this.status){
            const response = JSON.parse(this.responseText);
            //console.log(this.responseText);
            const rate = response.rates.TRY; //tipi number türk lirası değerini verir euronun
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * rate;
            //console.log(amount * rate);
            //console.log(response.rates.TRY);// GELEN CEVABDAN RATES KISMINDAN TRY Yİ ÇEKİYORUZ

        }
    }

    xhr.send();

}