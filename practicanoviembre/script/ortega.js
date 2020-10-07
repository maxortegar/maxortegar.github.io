const lc1 = document.getElementById("lc1");
lc1.addEventListener('click', function() {
    let text1 = document.getElementById("text1");
    if (text1.value == 'Lectura de 3 min') {
        document.getElementById("text1").value = 'Lectura completada';
    } else {
        document.getElementById("text1").value = 'Lectura de 3 min';
    }

})



const lc2 = document.getElementById("lc2");
lc2.addEventListener('click', function() {
    let text2 = document.getElementById("text2");
    if (text2.value == 'Lectura de 2 min') {
        document.getElementById("text2").value = 'Lectura completada';
    } else {
        document.getElementById("text2").value = 'Lectura de 2 min';
    }
})



const lc3 = document.getElementById("lc3");
lc3.addEventListener('click', function() {
    let text3 = document.getElementById("text3");
    if (text3.value == 'Lectura de 3 min') {
        document.getElementById("text3").value = 'Lectura completada';
    } else {
        document.getElementById("text3").value = 'Lectura de 3 min';
    }
})



const lc4 = document.getElementById("lc4");
lc4.addEventListener('click', function() {
    let text4 = document.getElementById("text4");
    if (text4.value == 'Lectura de 5 min') {
        document.getElementById("text4").value = 'Lectura completada';
    } else {
        document.getElementById("text4").value = 'Lectura de 5 min';
    }
})



const mostfec = document.getElementById("mostfec");
let f = new Date();
mostfec.addEventListener('click', function() {
    let text5 = document.getElementById("text5");
    if (text5.value == '') {
        document.getElementById("text5").value = f;

    } else {
        document.getElementById("text5").value = '';

    }
})



const mostpan = document.getElementById("mostpan");
mostpan.addEventListener('click', function() {
    let fotos = document.getElementById("fotos");
    if (fotos.style.display == "block") {
        document.getElementById("turismo").style.display = "block";
        document.getElementById("fotos").style.display = "none";

    } else {
        document.getElementById("turismo").style.display = "none";
        document.getElementById("fotos").style.display = "block";

    }
})