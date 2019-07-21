const isim = "Mert TOSUN";
const bolum = "PC";
const maas = "4000";

const a = "İsim: " + isim + "\n" + "Bölüm: " + bolum + "\n" + "Maaş: " + maas;
console.log(a);

//template literalla yazma

const b =`İsim:${isim}\nBölüm:${bolum}\nMaaş:${maas}`;
console.log(b);


// //eski hali
// const html = "<ul>" + 
//             "<li>" + isim + "</li>" +
//             "<li>" + bolum + "</li>" + 
//             "<li> " + maas + "</li>" + 
//             "</ul> ";
            
// //document.body.innerHTML = html;

//yeni hali

const html1 = `
            <ul>
            <li>${isim}</li>
            <li>${bolum}</li>
            <li>${maas}</li>
            <li>Matematiksel işlem : ${10/4*2} </li>
            </ul>
            `;
document.body.innerHTML = html1;