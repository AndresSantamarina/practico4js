/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class Animal {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre !== '') {
            this._nombre = nuevoNombre;
        } else {
            alert('Ingrese un nombre válido')
        }
    }
    set edad(nuevaEdad) {
        if (Number.isInteger(nuevaEdad) && nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            alert('Ingrese una edad válida')
        }
    }

    emitirSonido() {
        document.write('<p>Sonido del animal</p>')
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this._raza = raza
    }
    get raza() {
        return this._raza;
    }
    set raza(nuevaRaza) {
        if (nuevaRaza !== '') {
            this._raza = nuevaRaza;
        } else {
            alert('Ingrese una raza válida')
        }
    }
    emitirSonido() {
        document.write(`<p>Guau guau</p>`)
    }
}

class Gato extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this._raza = raza
    }
    get raza() {
        return this._raza;
    }
    set raza(nuevaRaza) {
        if (nuevaRaza !== '') {
            this._raza = nuevaRaza;
        } else {
            alert('Ingrese una raza válida')
        }
    }
    emitirSonido() {
        document.write(`<p>Miau miau</p>`)
    }
}

const labrador = new Perro('Tom', 5, 'labrador');
labrador.emitirSonido();
const siames = new Gato('Eren', 3, 'siamés');
siames.emitirSonido();