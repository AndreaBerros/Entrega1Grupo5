const form = document.getElementById ('formulario');


const enviarFormulario = (event) => {
    event.preventDefault ();
    console.log (
    event.target.email.value, 
    event.target.password.value,
   );
    
}
form.addEventListener('submit', enviarFormulario);