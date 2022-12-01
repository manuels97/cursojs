alert("Bienvenido soy una calculadora de calorias")

const nombre= prompt ("Cual es tu nombre?")
const objetivoKcal = prompt ("¿Cual es tu objetivo de calorias diarias?")
const queDeporte = prompt ("Qué deporte realizas?")

let contadorKcal= 0;
let consumidas= 0
let respuesta= "si"
let respuesta2="si"


let dia=prompt ("Que dia es?")
let diaAhora= dia

class usuarios {
    constructor (nombre, objetivo, deporte, resultado){
    this.nombre=nombre;
    this.objetivo=objetivo;
    this.deporte=deporte;
    this.resultado=resultado;

    }
}

const arrayUsuarios = []; // Array para cuando se haga un sistema mas grande






const suma = (num1,num2) =>{ return num1+num2 }
const resta = (num1,num2) =>{ return num1-num2 }
const cuantasKcal=(com) =>{ // funcion para contar calorias consumidas
    if (com=== "desayuno"){
        consumidas= parseInt(prompt (`Cuantas calorias consumiste en el ${com}`)) ;
   }
    else if(com=== "almuerzo") {
            consumidas= parseInt(prompt (`Cuantas calorias consumiste en el ${com}`)) ;
    }
    else if(com=== "merienda") {
            consumidas= parseInt(prompt (`Cuantas calorias consumiste en la ${com}`)) ;
    }
    else if(com=== "cena") {
            consumidas= parseInt(prompt (`Cuantas calorias consumiste en la ${com}`)) ;
    }
    else{
            consumidas= parseInt( prompt (`Cuantas calorias consumiste en el/la ${com}`));
    }
    return consumidas

}
const comparador = (obj, cont) =>{ // funcion para dar el resultado

    if (obj > cont){
        const mensajeFinal=`El ${dia} No cumpliste tus calorias diarias, consumiste  ${contadorKcal}. Te faltaron consumir     ${(objetivoKcal-contadorKcal)}`;
        const usuario = new usuarios (nombre,objetivoKcal,queDeporte, mensajeFinal)
        arrayUsuarios.push(usuario)  // Agregando usuarios al array 
        console.log(arrayUsuarios)
       
        }  
        else if (obj==cont){
            const mensajeFinal=`El <b style="color:red"> ${dia}</b> Cumpliste con tus calorias diarias! , consumiste <b style="color:green"> ${contadorKcal}</b>.`;
            const usuario = new usuarios (nombre,objetivoKcal,queDeporte, mensajeFinal)
            arrayUsuarios.push(usuario)
            console.log(arrayUsuarios)
        }   
        else if (obj< cont){
            const mensajeFinal=`El <b style="color:blue"> ${dia}</b> Superaste tus calorias diarias por ${(contadorKcal-objetivoKcal)} calorias, consumiste <b style="color:red">${contadorKcal}</b>.`;
            const usuario = new usuarios (nombre,objetivoKcal,queDeporte, mensajeFinal)
            arrayUsuarios.push(usuario)
            console.log(arrayUsuarios)
        }
}

while (respuesta=="si"){

    respuesta2=prompt("Queres cargar informacion ahora? si - no ")

        while ( respuesta2 =="si") { 

            let carga= prompt ("Cuantas comidas queres cargar? 1,2,3,4,5,6..." ); 

            if (carga != 0){

                for (let i=carga; i; i--) { 
                    let comida= prompt("Cual de estas comidas realizaste?.  desayuno, almuerzo, mierienda, cena u otra");
                    consumidas=0;
                    
                    let consumida= cuantasKcal(comida)
                    contadorKcal=suma(contadorKcal,consumida)
                    
                    }                  
                }
            respuesta2= prompt("Queres seguir cargando informacion ?") // Sale del while si no quiere cargar mas por ahora.
            
            } 

        respuesta=prompt(`Vas a cargar mas informacion del ${dia} ?`) // Sale del while general si no carga mas info por ese dia, para dar el resultado

}

 

comparador(objetivoKcal,contadorKcal)
