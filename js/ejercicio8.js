/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    constructor(nombre, edad, profesion) {
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get profesion() {
        return this._profesion;
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre !== '') {
            this._nombre = nuevoNombre;
        } else (alert('Ingrese un nombre válido'))
    }
    set edad(nuevaEdad) {
        if (Number.isInteger(nuevaEdad) && nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else (alert('Ingrese una edad válido'))
    }
    set profesion(nuevaProfesion) {
        if (nuevaProfesion !== '') {
            this._profesion = nuevaProfesion;
        } else (alert('No se permite este campo vacío'))
    }

    saludar() {
        document.write(`<p>Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años, y soy ${this.profesion}.</p>`)
    }

    despedirse() {
        document.write(`<p>Adiós.</p>`)
    }
}

const maestro = new Persona('Lionel', 35, 'maestro');
const bombero = new Persona('Gonzalo', 27, 'bombero');

maestro.saludar();
maestro.despedirse();
bombero.saludar();
bombero.despedirse();