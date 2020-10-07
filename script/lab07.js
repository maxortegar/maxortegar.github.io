const btnExtraer = document.getElementById("btnExtraer");
btnExtraer.addEventListener('click', function() {
    let nombres = document.getElementById("txtNombres").value;
    let fecha = document.getElementById("txtFecha").value;

    let fullname = nombres.split(' ');
    let f = new Date();
    let mes = fecha.substring(3, 5);

    if (nombres == "") {
        document.getElementById("txtNombres").focus();
    } else {
        if (fecha == "") {
            document.getElementById("txtFecha").focus();
        } else {
            /*console.log(nombres + " " + fecha + " " + n + " " + mes);*/

            if (fullname.length == 3) {
                let primernombre = fullname[0];
                let primerapellido = fullname[1];
                let segundoapellido = fullname[2];
                let numerocaracteres = (primerapellido + segundoapellido).length;

                document.getElementById("txtAP").value = primerapellido;

                document.getElementById("txtAM").value = segundoapellido;

                document.getElementById("txtN").value = primernombre;

                document.getElementById("txtLA").value = numerocaracteres;

            } else if (fullname.length == 4) {
                primernombre = fullname[0];
                segundonombre = fullname[1];
                primerapellido = fullname[2];
                segundoapellido = fullname[3];
                numerocaracteres = (primerapellido + segundoapellido).length;

                document.getElementById("txtAP").value = primerapellido;

                document.getElementById("txtAM").value = segundoapellido;

                document.getElementById("txtN").value = primernombre + " " + segundonombre;

                document.getElementById("txtLA").value = numerocaracteres;
            }

            document.getElementById("txtE").value = f.getFullYear() - (fecha.substring(6, fecha.length));

            switch (mes) {
                case '01':
                    document.getElementById("txtM").value = "Enero";
                    break;
                case '02':
                    document.getElementById("txtM").value = "Febreo";
                    break;
                case '03':
                    document.getElementById("txtM").value = "Marzo";
                    break;
                case '04':
                    document.getElementById("txtM").value = "Abril";
                    break;
                case '05':
                    document.getElementById("txtM").value = "Mayo";
                    break;
                case '06':
                    document.getElementById("txtM").value = "Junio";
                    break;
                case '07':
                    document.getElementById("txtM").value = "Julio";
                    break;
                case '08':
                    document.getElementById("txtM").value = "Agosto";
                    break;
                case '09':
                    document.getElementById("txtM").value = "Septiembre";
                    break;
                case '10':
                    document.getElementById("txtM").value = "Octubre";
                    break;
                case '11':
                    document.getElementById("txtM").value = "Noviembre";
                    break;
                case '12':
                    document.getElementById("txtM").value = "Diciembre";
                    break;

                default:
                    document.getElementById("txtM").value = "Mes invalido";
            }

        }

    }
})


const btnCambiarColor = document.getElementById("btnCambiarColor");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const text8 = document.getElementById("text8");

btnCambiarColor.addEventListener('click', function() {
    /*if (text1.classList.contains('ro')) {
        text1.classList.remove('ro');
        text2.classList.remove('ro');
        text3.classList.remove('ro');
        text4.classList.remove('ro');
        text5.classList.remove('ro');
        text6.classList.remove('az');
        text7.classList.remove('az');
        text8.classList.remove('az');

    } else {
        text1.classList.add('ro');
        text2.classList.add('ro');
        text3.classList.add('ro');
        text4.classList.add('ro');
        text5.classList.add('ro');
        text6.classList.add('az');
        text7.classList.add('az');
        text8.classList.add('az');
    }*/

    text1.classList.toggle('ro');
    text2.classList.toggle('ro');
    text3.classList.toggle('ro');
    text4.classList.toggle('ro');
    text5.classList.toggle('ro');
    text6.classList.toggle('az');
    text7.classList.toggle('az');
    text8.classList.toggle('az');


});


const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener('click', function() {
    document.getElementById("txtNombres").focus();
    document.getElementById("txtNombres").value = "";
    document.getElementById("txtFecha").value = "";
    document.getElementById("txtAP").value = "";
    document.getElementById("txtAM").value = "";
    document.getElementById("txtN").value = "";
    document.getElementById("txtLA").value = "";
    document.getElementById("txtE").value = "";
    document.getElementById("txtM").value = "";
})