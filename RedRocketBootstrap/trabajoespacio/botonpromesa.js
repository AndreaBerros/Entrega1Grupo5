

let numero=0;
let contar = document.getElementById("caja2");
let likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", ()=>{numero++;

    contar.textContent = numero;
    });

function darLike() {
    return new Promise(function(resolve, reject) {

      setTimeout(function() {
       
        resolve("Función ejecutada correctamente");
      }, 2000);
    });
  }
  document.getElementById("likeButton").addEventListener("click", function() {
    darLike()
    .then(function(resultado) {
      console.log(resultado);
    }).catch(function(mensajeError) {
        console.log (mensajeError);
    })
    
  });

  

let numero2=0;
let contar2 = document.getElementById("caja3");
let likeButton2 = document.getElementById("likeButton2");

likeButton2.addEventListener("click", ()=>{numero2++;

    contar2.textContent = numero2;
    });

function darLike2() {
    return new Promise(function(resolve, reject) {

      setTimeout(function() {
       
        resolve("Función ejecutada correctamente");
      }, 2000);
    });
  }
  document.getElementById("likeButton2").addEventListener("click", function() {
    darLike2()
    .then(function(resultado) {
      console.log(resultado);
    }).catch(function(mensajeError) {
        console.log (mensajeError);
    })
    
  });

  