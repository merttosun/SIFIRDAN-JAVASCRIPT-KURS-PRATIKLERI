const  process = 2;

switch(process){
    case 1:
        console.log("İşlem 1");
        break; //break kullanmazsak aşağıdaki işlemlere devam eder.
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    case 4:
        console.log("İşlem 4");
        break;
    case 5:
        console.log("İşlem 5"); 
        break;
    default: //şartların hiç biri olmazsa çalışacak kısım
        console.log("Geçersiz İşlem");//break kullansak da kullanmasak da aynı çünkü devamın da işlem yok
}
