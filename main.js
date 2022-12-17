const textCalorias= document.getElementById("calorias")
const botonAgregar=document.getElementById("sumarcal")
const contador= document.getElementById("contadore")
parseInt(textCalorias)

let calorias=0;



botonAgregar.addEventListener("click", (e)=> {
    e.preventDefault()
    iniciar()
    
})

const iniciar =()=> {
    calorias= textCalorias.value 
    
    contador.innerHTML=`
                    <h1>Consumidas</h1>
                    <h2 >${calorias} </h2>
                    </div>
                    `

}


