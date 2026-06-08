const categorias = {
    moneda: {
        unidades: ['MXN', 'USD']
    },
    peso: {
        unidades: ['kg', 'g', 'lb']
    },
    distancia: {
        unidades: ['km', 'm', 'mi', 'ft']
    },
    volumen: {
        unidades: ['L', 'mL', 'gal', 'oz']
    }
}
const inputValor = document.getElementById('input-de');
const outputValor = document.getElementById('input-a');
const unidadOrigen = document.getElementById('select-unidad-origen');
const unidadDestino = document.getElementById('select-unidad-destino');

function poblarSelectores(categoria) {
    //Obtenemos las unidades de la categoría seleccionada
    const unidades = categorias[categoria].unidades;

    //Limpiamos los selectores antes de poblarlos
    unidadOrigen.innerHTML = '';
    unidadDestino.innerHTML = '';

    //Por cada unidad, crear una <option> y agregarla
    unidades.forEach(function(unidad) {
        const opcion= document.createElement('option');
        opcion.value = unidad;
        opcion.textContent = unidad;
        unidadOrigen.appendChild(opcion);
        unidadDestino.appendChild(opcion.cloneNode(true));
    });
    unidadDestino.selectedIndex = 1; //Seleccionar la segunda unidad por defecto
}
poblarSelectores('moneda');

const tabs= document.querySelectorAll('.tab');
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        //Remover la clase 'active' de todas las pestañas
        tabs.forEach(function(t) {
            t.classList.remove('active');
        });
        //Agregar la clase 'activo' a la pestaña clickeada
        this.classList.add('activo');
        //Poblar los selectores con las unidades de la categoría seleccionada
        poblarSelectores(this.dataset.categoria);
    });
});