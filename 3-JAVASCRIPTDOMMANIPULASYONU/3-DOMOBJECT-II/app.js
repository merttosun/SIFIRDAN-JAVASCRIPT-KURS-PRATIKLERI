let value;
value = document;
console.log(value);

valuesc = document.scripts; //html collection şeklinde gelir
console.log(valuesc);

valueln = document.scripts.length;
console.log(valueln);

valueindeks = document.scripts[0];
console.log(valueindeks);

//LİNKLER

valuelinkler = document.links; //html collection şeklinde gelir
console.log(valuelinkler);
valueilklink = document.links[0]; //ilk link elemanına ulaşır
console.log(valueilklink);
valuesonlink = document.links[document.links.length-1]; //sonuncu linke ulaşma
console.log(valuesonlink);
//attribute çekme
valueclass = document.links[document.links.length-1].getAttribute("class"); //class attributeunu çeker
//valueclassname1 = document.links[document.links.length-1].className(); //aynı şeyi yaparclass attributeunu çeker
//valueclasslist = document.links[document.links.length-1].classList("class"); //aynı şeyi yaparclass attributeunu çeker
console.log(valueclass); //btn btn-dark çıktısını verir
valuehref = document.links[document.links.length-1].getAttribute("href"); //class attributeunu çeker
console.log(valuehref); // ulastıgımız linkin bir hrefi olmadıgı için # sonucu verir

//formlar
//formumuzun bir name attribute u olursa  indeks kısmına formun verilen adını yazaniliriz
formlar = document.forms;
console.log(formlar);
formsayisi = document.forms.length;
console.log(formsayisi);
ilkform = document.forms[0];
isimleulasma = document.forms[form]; //form burda formun name=""attribute unda verilen isim
console.log(isimleulasma);

//id çekme
formid = document.forms[0].getAttribute("id");
console.log(formid);
formmethod = document.forms[0].getAttribute("method");
console.log(formmethod);
