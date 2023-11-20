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
    constructor(nombre, telefono){
        this._nombre = nombre;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }
    get telefono(){
        return this._telefono;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    set telefono(nuevoTelefono){
        this._telefono = nuevoTelefono;
    }
}

class Agenda {
    constructor(tamanio = 10){
        this._contactos = [];
        this._tamanioMaximo = tamanio;
    }

    get contactos(){
        return this._contactos;
    }
    get tamanioMaximo(){
        return this._tamanioMaximo;
    }
    set contactos(nuevoContactos){
        this._contactos = nuevoContactos;
    }
    set tamanioMaximo(nuevoTamanioMaximo){
        this._tamanioMaximo = nuevoTamanioMaximo;
    }

    aniadirContacto(contacto){
        this.contactos.push(contacto);
    }

    existeContacto(contacto){
        if(this.contactos.nombre === contacto.nombre){
            alert('El contacto ya existe en la agenda')
        }else{
            alert('El contacto no existe')
        }
    }

    listarContactos(){
        for ( let i=0; i<this.contactos.length;i++){
            document.write(`<ul>
            <li>Nombre: ${this.contactos}</li>
            </ul>`)
        }
    }

    buscarContacto(nombre){

    }

    eliminarContacto(contacto){

    }

    agendaLlena(){
        if(this.contactos.length >= this.tamanioMaximo){
            alert('La agenda está llena')
        }else{
            alert('La agenda tiene espacio')
        }
    }

    huecosLibres(){
        const espacioLibre = this.tamanioMaximo - this.contactos.length;
        alert(`Queda/n ${espacioLibre} espacio/s libre/s`)
    }
}

const agenda = new Agenda()

agenda.aniadirContacto(new Contacto('Andrés',123456789));
console.log(agenda.contactos)
agenda.listarContactos()
