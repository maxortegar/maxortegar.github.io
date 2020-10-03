let flag = 1;

function funcion() {
    let cambiimagen = document.getElementById("icon01");
    if (flag == 1) {
        cambiimagen.src = "img/logo2.png";
        flag = 0;
    } else {
        cambiimagen.src = "img/logo1.png";
        flag = 1;
    }
}