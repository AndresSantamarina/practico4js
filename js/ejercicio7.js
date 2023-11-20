/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this._nombre = nombre;
        this._telefono = telefono;
    }

    get nombre() {
        return this._nombre;
    }
    get telefono() {
        return this._telefono;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    set telefono(nuevoTelefono) {
        this._telefono = nuevoTelefono;
    }
}

class Agenda {
    constructor(tamanio = 10) {
        this._contactos = [];
        this._tamanioMaximo = tamanio;
    }

    get contactos() {
        return this._contactos;
    }
    get tamanioMaximo() {
        return this._tamanioMaximo;
    }
    set contactos(nuevoContactos) {
        this._contactos = nuevoContactos;
    }
    set tamanioMaximo(nuevoTamanioMaximo) {
        this._tamanioMaximo = nuevoTamanioMaximo;
    }
    
    //Me falta validar que no se ingresen contactos repetidos, le estoy pasando un objeto como parámetro y necesito comparar los nombres como en existeContacto
    aniadirContacto(contacto) {
            this.contactos.push(contacto);
    }

    existeContacto(nombre) {
        if (this.contactos.find(contacto => contacto.nombre === nombre)) {
            alert('El contacto ya existe en la agenda')
        } else {
            alert('El contacto no existe')
        }
    }

    listarContactos() {
        if (this.contactos.length > 0) {
            this.contactos.forEach(contacto => {
                alert(`Nombre: ${contacto.nombre} | Teléfono: ${contacto.telefono}`);
            })
        } else {
            alert('No hay contactos')
        }
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre)
        if (contactoEncontrado) {
            alert(`El número de teléfono del contacto ${contactoEncontrado.nombre} es ${contactoEncontrado.telefono}`)
        } else {
            alert('El contacto buscado no existe')
        }
    }

    eliminarContacto(indice) {
        if (indice !== -1) {
            this.contactos.pop(indice);
            alert('El contacto ha sido eliminado con éxito')
        } else {
            alert('Índice de contacto incorrecto')
        }
    }

    agendaLlena() {
        if (this.contactos.length >= this.tamanioMaximo) {
            alert('La agenda está llena')
        } else {
            alert('La agenda tiene espacio')
        }
    }

    huecosLibres() {
        const espacioLibre = this.tamanioMaximo - this.contactos.length;
        alert(`Queda/n ${espacioLibre} espacio/s libre/s`)
    }
}

const agenda = new Agenda()
let salir = false;

while (!salir) {
    const opcion = parseInt(prompt("Seleccione una opción: 1- Añadir contacto, 2- Ver si existe el contacto, 3- Buscar contacto, 4- Listar los contactos, 5- Eliminar un contacto, 6- Ver si la agenda está llena, 7- Ver el espacio libre en la agenda, 8-Salir"))

    switch (opcion) {
        case 1:
            agenda.aniadirContacto(new Contacto(prompt('Ingrese un nombre'), parseInt(prompt('Ingrese un teléfono'))));
            break;
        case 2:
            agenda.existeContacto(prompt('Ingrese el nombre del contacto'));
            break;
        case 3:
            agenda.buscarContacto(prompt('Ingrese el contacto a buscar'));
            break;
        case 4:
            agenda.listarContactos();
            break;
        case 5:
            agenda.eliminarContacto(parseInt(prompt('Ingrese el índice del contacto a eliminar')));
            break;
        case 6:
            agenda.agendaLlena();
            break;
        case 7:
            agenda.huecosLibres();
            break;
        case 8:
            salir = true;
            break;
        default:
            alert('Ingrese una opción válida');
    }
}
