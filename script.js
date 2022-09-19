//variables que almacenaras los dos numeros de la suma

var num1, num2;
//variable para guardar el resultado de la suma
var respuesta;
//variable donde se cargara la opcion correcta
var indiceOpCorrecta;

var puntaje=0;

//var sonido=new Audio();
//sonido.src=Mouse_click.mp3;

//todos los elementos que voy a manipular de la pagina

txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

txt_puntos= document.getElementById("puntos");

function comenzar() {
  //cada vez que inicia limpia los campos
  txt_resultado.innerHTML = "?";
  txt_msj.innerHTML = "";
  txt_puntos.innerHTML=puntaje;
  

  //genero la summa aleatorios entre 0 y 9
  num1 = Math.round(Math.random() * 9);
  num2 = Math.round(Math.random() * 9);
  respuesta = num1 + num2;

  //signamos la suma para que se visualice
  txt_suma.innerHTML = num1 + " + " + num2 + "=";

  //genero un numero entre 0 y dos para colocar la opccion correcta
  indiceOpCorrecta=Math.round(Math.random()*2)
  if(indiceOpCorrecta==0)
  {
    op1.innerHTML=respuesta;
    op2.innerHTML=respuesta +1;
    op3.innerHTML=respuesta -1;

  }
  if(indiceOpCorrecta==1)
  {
    op2.innerHTML=respuesta;
    op1.innerHTML=respuesta +2;
    op3.innerHTML=respuesta -1;

  }
  if(indiceOpCorrecta==2)
  {
    op3.innerHTML=respuesta;
    op1.innerHTML=respuesta +1;
    op2.innerHTML=respuesta -1;

  }
}

function controlarRespuesta(opcionElegida){
    txt_resultado.innerHTML=opcionElegida.innerHTML;

    if(respuesta==opcionElegida.innerHTML){
        txt_msj.innerHTML="EXCELENTE!!!";
        txt_msj.style.color="green";
        txt_puntos.innerHTML=""+ puntaje++;

        setTimeout(comenzar,800);
    }else{
        txt_msj.innerHTML="INTENTA DE NUEVO!!!";
        txt_msj.style.color="red";
        puntaje=0;
        txt_puntos.innerHTML=""+ puntaje;

        setTimeout(limpiar,800);
    }

}
function limpiar(){
    txt_resultado.innerHTML = "?";
  txt_msj.innerHTML = "";
  
}
comenzar();
