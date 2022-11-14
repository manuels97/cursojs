const objetivoKcal = prompt ("¿Cual es tu objetivo de calorias diarias?")
// `` <>
// </b>
let contadorKcal= 0;
let consumidas= 0
let respuesta="si"

let dia=prompt ("Que dia es?")
let diaAhora= dia


const cuantasKcal=(com) =>{
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
const comparador = (obj, cont) =>{

    if (obj > cont){
        document.write(`El <b style="color:red">${dia}</b> No cumpliste tus calorias diarias, consumiste <b style="color:red"> ${contadorKcal}</b>. Te faltaron consumir     ${(objetivoKcal-contadorKcal)}`);
        }  
        else if (obj==cont){
            document.write(`El <b style="color:red"> ${dia}</b> Cumpliste con tus calorias diarias! , consumiste <b style="color:green"> ${contadorKcal}</b>.`);
        }   
        else if (obj< cont){
            document.write(`El <b style="color:blue"> ${dia}</b> Superaste tus calrias diarias por ${(contadorKcal-objetivoKcal)} calorias, consumiste <b style="color:red">${contadorKcal}</b>.`);
        }
}

while (diaAhora==dia){

    respuesta=prompt("Queres cargar informacion ahora? si - no ")

        while ( respuesta =="si") { 

            let carga= prompt ("Cuantas comidas queres cargar?"); 

            if (carga != 0){

                for (let i=carga; i; i--) { 
                    let comida= prompt("Cual de estas comidas realizaste?.  desayuno, almuerzo, mierienda, cena u otra");
                    consumidas=0;
                    
                    let consumida= cuantasKcal(comida)
                    contadorKcal=contadorKcal+consumida;
                    
                    }                  
                }
            respuesta= prompt("Queres seguir cargando informacion ?")
            
            } 

        diaAhora=prompt("Que dia es ahora?")

}

 

comparador(objetivoKcal,contadorKcal)






// if (objetivoKcal > contadorKcal){
//     document.write(`El <b style="color:red">${dia}</b> No cumpliste tus calorias diarias, consumiste <b style="color:red"> ${contadorKcal}</b>. Te faltaron consumir     ${(objetivoKcal-contadorKcal)}`);
//     }

//     else if (objetivoKcal==contadorKcal){
//         document.write(`El <b style="color:red"> ${dia}</b> Cumpliste con tus calorias diarias! , consumiste <b style="color:green"> ${contadorKcal}</b>.`);
//     }

//     else if (objetivoKcal< contadorKcal){
//         document.write(`El <b style="color:blue"> ${dia}</b> Superaste tus calrias diarias por ${(contadorKcal-objetivoKcal)} calorias, consumiste <b style="color:red">${contadorKcal}</b>.`);
//     }

// if (comida=== "desayuno"){
            //      consumidas= parseInt(prompt (`Cuantas calorias consumiste en el ${comida}`)) ;
            // }
            // else if(comida=== "almuerzo") {
            //      consumidas= parseInt(prompt (`Cuantas calorias consumiste en el ${comida}`)) ;
            // }
            // else if(comida=== "merienda") {
            //      consumidas= parseInt(prompt (`Cuantas calorias consumiste en la ${comida}`)) ;
            // }
            // else if(comida=== "cena") {
            //      consumidas= parseInt(prompt (`Cuantas calorias consumiste en la ${comida}`)) ;
            // }
            // else{
            //      consumidas= parseInt( prompt (`Cuantas calorias consumiste en el/la ${comida}`));
            // }