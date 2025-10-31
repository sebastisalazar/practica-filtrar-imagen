//VARIABLES
//const arrayBotones=["Mar","Edificio","Señales", "Arenas", "Cosa"];

const botonTags=document.querySelector('#botonTags')
const imagenPrincipal=document.querySelector('#imagenPrincipal img');
const imagenMiniatura=document.querySelector('#relacionadas div');

//console.log(imagenMiniatura)
const urlBase="assets"
const galeriaViajes=[
    {
      id:1,
      src:`${urlBase}/viajes-1.jpg`,
      titulo: "Playa con Palmera",
      alt: "Playa con palmera",
      tags:["playa","arenas","mar"]
    },
    {
      id:2,
      src:`${urlBase}/viajes-2.jpg`,
      titulo: "Casa en el agua",
      alt:"Casa en el agua",
      tags:["playa","edificio","cosa","mar"]
    },
    {
      id:3,
      src:`${urlBase}/viajes-3.jpg`,
      titulo: "Señales de Ciudades",
      alt:"Señales de Ciudades",
      tags:["señales","cosa"]
    },
    {
      id:4,
      src:`${urlBase}/viajes-4.jpg`,
      titulo: "Plaza de España en Sevilla",
      alt:"Plaza de España en Sevilla",
      tags:["edificio","cosa"]
    },
    {
      id:5,
      src:`${urlBase}/viajes-5.jpg`,
      titulo: "Plaza de España en Sevilla 2",
      alt:"Plaza de España en Sevilla 2",
      tags:["edificio","cosa"]
    },
    {
      id:6,
      src:`${urlBase}/viajes-6.jpg`,
      titulo: "Paseo por la Orilla",
      alt:"Paseo por la Orilla",
      tags:["arenas","mar"]
    },
    {
      id:7,
      src:`${urlBase}/viajes-7.jpg`,
      titulo: "Pueblo en Montaña",
      alt:"Pueblo en Montaña",
      tags:["edificio","cosa"]
    },
]


//EVENTOS

document.addEventListener('click',(ev)=>{
    
    if(ev.target.matches('#botonTags button')){
        
        const tag=ev.target.id
        //console.log(ev.target);
        pintarPrincipal(tag)
        
        //filtrarImagenes(tag,'principal');
    }

  


})

//FUNCIONES

const filtrarBotones=()=>{

  const arrayBotones=["Mar","Edificio","Señales", "Arenas", "Cosa"];
  /*  const tagsFiltrados=galeriaViajes.map(function(objeto){
      console.log(objeto.tags)
      return objeto.tags
    })*/
  return arrayBotones;
    
}

//console.log(filtrarBotones());


const pintarBotones=()=>{
  
    const arrayBotones=filtrarBotones();
    let nav=document.querySelector('#botonTags')

    //console.log(nav);
    
    let fragmento=document.createDocumentFragment();
    
    arrayBotones.forEach(element => {
        let boton=document.createElement("button");
        boton.id=element.toLowerCase();
        boton.textContent=element
        fragmento.append(boton);
    });
    //console.log(fragmento);
    nav.append(fragmento);

}

const filtrarImagenes=(tag,donde)=>{

    const arrayFiltradas=galeriaViajes.filter((elemento)=>{
      return elemento.tags.includes(tag);
    })

    //console.log(arrayFiltradas);

    if(donde=='principal'){
      //console.log(arrayFiltradas[0],'desde filtrarImagenes');
      return arrayFiltradas[0]
    }else{
      return arrayFiltradas;
    }
}

const pintarPrincipal=(tag)=>{

  const imagenApintar=filtrarImagenes(tag,'principal')
  console.log(imagenApintar,'desde pintar pintarPrincipal')
  imagenPrincipal.src=imagenApintar.src;
  imagenPrincipal.alt=imagenApintar.alt;
  
  pintarMiniaturas(tag);
  

}

const pintarMiniaturas=(tag,indice=0)=>{
  const arrayFiltradas=filtrarImagenes(tag,'miniaturas');

  //console.log(arrayFiltradas,'desde pintarMiniaturas')
  
  const fragmento=document.createDocumentFragment();
  
  arrayFiltradas.forEach((elemento,index)=>{
      if(index!=indice){
          //console.log(elemento, 'en pintar Miniatura')
          const tagArticle=document.createElement("ARTICLE");
          const tagH3=document.createElement("H3");
          const tagDiv=document.createElement("DIV");
          const tagImg=document.createElement("IMG");

          tagImg.src=elemento.src;
          tagImg.alt=elemento.alt;
          tagH3.textContent=elemento.titulo;

          tagDiv.append(tagImg);
          tagArticle.append(tagH3);
          tagArticle.append(tagDiv);

          fragmento.append(tagArticle);
      }
  })
  
  imagenMiniatura.append(fragmento)
}

//INVOCACIONES
pintarBotones();

