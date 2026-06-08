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
const TIPO_DE_CAMBIO = 17.15;

const conversiones = {
    moneda: {
        MXN: { toBase: v => v,                    fromBase: v => v                    },
        USD: { toBase: v => v * TIPO_DE_CAMBIO,   fromBase: v => v / TIPO_DE_CAMBIO   }
    },
    peso: {
        kg:  { toBase: v => v * 1000,   fromBase: v => v / 1000   },
        g:   { toBase: v => v,          fromBase: v => v           },
        lb:  { toBase: v => v * 453.59, fromBase: v => v / 453.59 }
    },
    distancia: {
        m:   { toBase: v => v,       fromBase: v => v        },
        km:  { toBase: v => v * 1000, fromBase: v => v / 1000 },
        mi:  { toBase: v => v * 1609.34, fromBase: v => v / 1609.34 },
        ft:  { toBase: v => v * 0.3048, fromBase: v => v / 0.3048 }
    },
    volumen: {
        L:   { toBase: v => v * 1000,  fromBase: v => v / 1000  },
        mL:  { toBase: v => v,         fromBase: v => v          },
        gal: { toBase: v => v * 3785,  fromBase: v => v / 3785  },
        oz:  { toBase: v => v * 29.57, fromBase: v => v / 29.57 }
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

const tabs= document.querySelectorAll('.tab');
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        //Remover la clase 'activo' de todas las pestañas
        tabs.forEach(function(t) {
            t.classList.remove('activo');
        });
        //Agregar la clase 'activo' a la pestaña clickeada
        this.classList.add('activo');
        //Poblar los selectores con las unidades de la categoría seleccionada
        poblarSelectores(this.dataset.categoria);
    });
});
function convertir() {
    const valor = parseFloat(inputValor.value);
    const origen = unidadOrigen.value;
    const destino = unidadDestino.value;

    if (isNaN(valor)) {
        outputValor.value = '';
        return;
    }

    const categoriaActiva = document.querySelector('.activo').dataset.categoria;
    const enBase = conversiones[categoriaActiva][origen].toBase(valor);
    const resultado = conversiones[categoriaActiva][destino].fromBase(enBase);

    outputValor.value = parseFloat(resultado.toFixed(4));
}

function swap() {
    // Intercambiar unidades (ya te lo di)
    const temp = unidadOrigen.value;
    unidadOrigen.value = unidadDestino.value;
    unidadDestino.value = temp;

    // Intercambiar valores — mismo patrón, 3 líneas
    const tempValor = inputValor.value;
    inputValor.value = outputValor.value;
    outputValor.value = tempValor;

    // Recalcular
    convertir();
}

document.getElementById('btn-swap').addEventListener('click', swap);

inputValor.addEventListener('input', convertir);
unidadOrigen.addEventListener('change', convertir);
unidadDestino.addEventListener('change', convertir);
poblarSelectores('moneda');