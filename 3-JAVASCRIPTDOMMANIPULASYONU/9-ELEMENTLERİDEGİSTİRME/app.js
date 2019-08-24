//REPLACE
//cardbody  yi seçelim . (class ismine göre)

const cardbody = document.querySelectorAll(".card-body")[1];
//sectigimiz h5 yerine yeni bir h3 elementi ekleyelim
const newElement = document.createElement("h3"); //h3 taginde bir element oluşturduk

newElement.className = "card-title";// classını verdik
newElement.id = "tasks-title"; //idsini verdik
newElement.textContent = "Yeni Todolar";

//yeni elementle eski elementi replace edelim

//eski elementi seçelim
const oldELement = document.querySelector("#tasks-title");
cardbody.replaceChild(newElement, oldELement);  // Yeni TOdolar yazan h3 ümüz eski h5 in yerini alır


console.log(cardbody);
