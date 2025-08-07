// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


// Nuestra lista de amigos, empieza vacía.

let amigos = [];

function agregarAmigo() {
    //  Obtener el nombre del campo de texto.
    let nombre = document.getElementById('amigo').value;

    // Revisar si el nombre ya está en nuestra lista de amigos.
    if (amigos.includes(nombre)) {
        // Si ya existe, mostramos una alerta y nos detenemos.
        alert('Este nombre ya está en la lista. Por favor, introduce otro.');
        return; // 'return' detiene la función aquí.
    }
    
    //  Si el nombre es nuevo, lo guardamos en nuestra lista.
    amigos.push(nombre);
    
    // Buscamos la lista en el HTML y le añadimos el nuevo nombre.
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML += `<li>${nombre}</li>`;

    // Limpiamos el campo de texto para el próximo nombre.
    document.getElementById('amigo').value = '';
 }


 // Función para sortear UN solo amigo de la lista.
   function sortearAmigo() {
    // 1. Validar que haya amigos disponibles.
    if (amigos.length == 0) {
        alert("¡No hay amigos en la lista para sortear!");
        return; // Detiene la función.
    }

   // 2. Generar un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado usando el índice aleatorio.
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en la pantalla.
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}