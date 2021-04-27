var imagenes =['./img/img1.jpg','./img/img2.jpeg','./img/img3.jpg']; //Guardar imagenes en un vector
var cont = 0; //contador de posicion de las iamgenes
 

function carousel(e) {
    var img = document.getElementById("imagen");
    var indicador = e.target.id;

    //Logica para cambiar las imagenes
    if(indicador=="adelante"){
        if(cont<imagenes.length){
            img.src=imagenes[cont];
            cont++;    
        }
        else{
            img.src=imagenes[0];
            cont=0;
        }

    }else if(indicador =="atras"){
        if(cont>0){
            img.src=imagenes[cont-1];
            cont--;
        }
        else{
            img.src=imagenes[imagenes.length-1];
            cont=imagenes.length-1;
        }

    }
    
}
//obtengo el elemento "container" para tener acceso a todos los "botones" (adelante y atras) 
var boton = document.getElementById("container");
    boton.addEventListener("click",carousel); //Creo el evento en los botones