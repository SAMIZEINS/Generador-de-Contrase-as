
let numeros = document.getElementById("numeros");
let mayusculas = document.getElementById("mayusculas");
let minusculas = document.getElementById("minusculas");
let simbolos = document.getElementById("simbolos");
let eliminar = document.getElementById("eliminar");
let cuadro = document.getElementById("cuadro");


let lista = [];

function generarLista(){
    lista = [];
    let contador = 0;
    let caracteres = document.getElementById("caracteres").value;
    let cantidad = parseInt(caracteres);

    if(cantidad == 0){
        alert("Porfavor Ingrese un número válido de Caracteres");
        location.reload();
    }
    
    while(contador <= cantidad){

        if (numeros.checked){
            let num = Math.floor(Math.random() * 10);
            lista.push(num);
            contador = contador + 1;
            if(contador == cantidad){
                break;
            }
        }

        if (mayusculas.checked){
            let mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
            
            let aleatorio = Math.floor(Math.random() * mayus.length);
            lista.push(mayus[aleatorio]);
            contador = contador + 1;
            if(contador == cantidad){
                break;
            }
        }

        if (minusculas.checked){
            let minus = "abcdefghijklmnñopqrstuvwxyz";
            
            let aleatorio = Math.floor(Math.random() * minus.length);
            lista.push(minus[aleatorio]);
            contador = contador + 1;
            if(contador == cantidad){
                break;
            }
        }

        if (simbolos.checked){
            let simbos = ",.-;:_{[}]+*¨/&%$#!?¡¿'|°";
            
            let aleatorio = Math.floor(Math.random() * simbos.length);
            lista.push(simbos[aleatorio]);
            contador = contador + 1;
            if(contador == cantidad){
                break;
            }
        }

        
        if (eliminar.checked){
            lista = [...new Set(lista)];
            if(lista.length < cantidad){
                contador = lista.length;
            }
        }
    }
}


function mezclar(){
    generarLista();

    for (let i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    cuadro.textContent = lista.join('');
}


const copiar = async () => {
    try {
      await navigator.clipboard.writeText(lista.join(''));
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
}



