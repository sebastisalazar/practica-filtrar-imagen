//VARIABLES
let arrayBotones=["Mar","Edificio","Señales", "Arenas", "Cosa"];

//FUNCIONES
 console.log(arrayBotones);

const pintarBotones=()=>{
    let nav=document.querySelector('#botonTags')
    console.log(nav);
    let fragmento=document.createDocumentFragment();
    
    arrayBotones.forEach(element => {
   
        let boton=document.createElement("button");
        boton.id=element.toLowerCase();
        boton.textContent=element
        fragmento.append(boton);
    });
    console.log(fragmento);
    nav.append(fragmento);

}

pintarBotones();

