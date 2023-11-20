/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this._nombreAeropuerto = nombreAeropuerto;
        this._listaDeAviones = [];
    }

    get nombreAeropuerto() {
        return this._nombreAeropuerto;
    }
    get listaDeAviones() {
        return this._listaDeAviones;
    }
    set nombreAeropuerto(nuevoNombreAeropuerto) {
        if (nuevoNombreAeropuerto !== '') {
            this._nombreAeropuerto = nuevoNombreAeropuerto
        } else {
            alert('Ingresar un nombre válido')
        }
    }
    set listaDeAviones(nuevaListaDeAviones) {
        if (nuevaListaDeAviones !== '') {
            this._listaDeAviones = nuevaListaDeAviones
        } else {
            alert('Ingresar una lista válida')
        }
    }

    agregarAvion(avion) {
        this.listaDeAviones.push(avion);
    }
    buscarAvion(nombre) {
        const avionEncontrado = this.listaDeAviones.find(avion => avion.nombre === nombre);
        if (avionEncontrado) {
            document.write(`<p>El avión "${avionEncontrado.nombre}" se encuentra en el aeropuerto. El vuelo está dirigido hacia ${avionEncontrado.destino}, y los pasajeros a bordo son: ${avionEncontrado.listaDePasajeros}</p>`)
            console.log('Avión encontrado')
        } else {
            console.log('No se encontró el avión')
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this._nombre = nombre;
        this._capacidad = capacidad;
        this._destino = destino;
        this._listaDePasajeros = [];
    }

    get nombre() {
        return this._nombre;
    }
    get capacidad() {
        return this._capacidad;
    }
    get destino() {
        return this._destino;
    }
    get listaDePasajeros() {
        return this._listaDePasajeros;
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre !== '') {
            this._nombre = nuevoNombre
        } else {
            alert('Ingresar un nombre de avión válido')
        }
    }
    set capacidad(nuevaCapacidad) {
        if (Number.isInteger(nuevaCapacidad) && nuevaCapacidad > 0) {
            this._capacidad = nuevaCapacidad
        } else {
            alert('Ingresar una capacidad válida')
        }
    }
    set destino(nuevoDestino) {
        if (nuevoDestino !== '') {
            this._destino = nuevoDestino
        } else {
            alert('Ingresar un destino válido')
        }
    }
    set listaDePasajeros(nuevaListaDePasajeros) {
        if (nuevaListaDePasajeros !== '') {
            this._listaDePasajeros = nuevaListaDePasajeros
        } else {
            alert('Ingresar una lista válida')
        }
    }

    abordar(pasajero) {
        if (this.listaDePasajeros.length < this.capacidad) {
            this.listaDePasajeros.push(pasajero)
            document.write(`<p>El pasajero "${pasajero}" ha subido a bordo del avión "${this.nombre}".</p>`)
        } else {
            document.write('<p>El avión está lleno</p>')
        }
    }
}


const aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');

const avionUno = new Avion('Avión 1', 100, 'Brasil', []);
const avionDos = new Avion('Avión 2', 150, 'Colombia', []);
const avionTres = new Avion('Avión 3', 1, 'Uruguay', []);

aeropuertoInternacional.agregarAvion(avionUno);
aeropuertoInternacional.agregarAvion(avionDos);
aeropuertoInternacional.agregarAvion(avionTres);
avionUno.abordar('Pasajero uno');
avionUno.abordar('Pasajero dos');
aeropuertoInternacional.buscarAvion('Avión 1');
aeropuertoInternacional.buscarAvion('Avión 2');
aeropuertoInternacional.buscarAvion('Avión 3');
console.log(aeropuertoInternacional.listaDeAviones);