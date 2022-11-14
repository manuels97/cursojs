alert("Bienvenido soy una calculadora de calorias")

const objetivoKcal = prompt ("¿Cual es tu objetivo de calorias diarias?")
let contadorKcal= 0;
let consumidas= 0
let respuesta= "si"
let respuesta2="si"


let dia=prompt ("Que dia es?")
let diaAhora= dia

// 
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
        document.write(`El <b style="color:red">${dia}</b> No cumpliste tus calorias diarias, consumiste <b style="color:red"> ${contadorKcal}</b>. Te faltaron consumir     ${(objetivoKcal-contadorKcal)}`);
        }  
        else if (obj==cont){
            document.write(`El <b style="color:red"> ${dia}</b> Cumpliste con tus calorias diarias! , consumiste <b style="color:green"> ${contadorKcal}</b>.`);
        }   
        else if (obj< cont){
            document.write(`El <b style="color:blue"> ${dia}</b> Superaste tus calorias diarias por ${(contadorKcal-objetivoKcal)} calorias, consumiste <b style="color:red">${contadorKcal}</b>.`);
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
                    contadorKcal=contadorKcal+consumida;
                    
                    }                  
                }
            respuesta2= prompt("Queres seguir cargando informacion ?") // Sale del while si no quiere cargar mas por ahora.
            
            } 

        respuesta=prompt(`Vas a cargar mas informacion del ${dia} ?`) // Sale del while general si no carga mas info por ese dia, para dar el resultado

}

 

comparador(objetivoKcal,contadorKcal)
