/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._anioNacimiento = anioNacimiento;
    }

    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get sexo() {
        return this._sexo;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
    get anioNacimiento() {
        return this._anioNacimiento;
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre !== '') {
            this._nombre = nuevoNombre;
        } else {
            alert("Ingrese su nombre")
        }
    }
    set edad(nuevoEdad) {
        if (Number.isInteger(nuevoEdad) && nuevoEdad > 0) {
            this._edad = nuevoEdad;
        } else {
            alert("Ingrese una edad válida")
        }
    }
    set dni(nuevoDni) {
        if (Number.isInteger(nuevoDni) && nuevoDni > 9999999) {
            this._dni = nuevoDni;
        } else {
            alert('Ingrese un DNI válido')
        }
    }
    set sexo(nuevoSexo) {
        if (nuevoSexo === 'H' || nuevoSexo === 'M') {
            this._sexo = nuevoSexo;
        } else {
            alert('Ingrese "H" para homber o "M" para mujer')
        }
    }
    set peso(nuevoPeso) {
        if (Number.isInteger(nuevoPeso) && nuevoPeso > 0) {
            this._peso = nuevoPeso;
        } else {
            alert("Ingrese un peso válido")
        }
    }
    set altura(nuevoAltura) {
        if (nuevoAltura !== '') {
            this._altura = nuevoAltura;
        } else {
            alert("Ingrese una altura válida")
        }

    }
    set anioNacimiento(nuevoAnioNacimiento) {
        if (Number.isInteger(nuevoAnioNacimiento) && nuevoAnioNacimiento >= 1930) {
            this._anioNacimiento = nuevoAnioNacimiento;
        } else {
            alert("Ingrese un año de nacimiento válido")
        }
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            document.write(`<p>La persona pertenece a la generación "Silent Generation" y el rasgo característico es la austeridad.</p>`)
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            document.write(`<p>La persona pertenece a la generación "Baby Boom" y el rasgo característico es la ambición.</p>`)
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            document.write(`<p>La persona pertenece a la generación "Generación X" y el rasgo característico es la obsesión por el éxito.</p>`)
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            document.write(`<p>La persona pertenece a la generación "Generación Y" y el rasgo característico es la frustración.</p>`)
        }
        else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            document.write(`<p>La persona pertenece a la generación "Generación Z" y el rasgo característico es la irreverencia.</p>`)
        }
    }

    esMayorDeEdad() {
        if (this.edad > 17) {
            document.write(`<p>La persona es mayor de edad</p>`)
        } else {
            document.write(`<p>La persona es menor de edad</p>`)
        }
    }

    mostrarDatos() {
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} metros</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        </ul>`)
    }

    generarDNI() {
        this.dni = parseInt(Math.random() * (100000000 - 10000000) + 10000000);
        document.write(`<p>Nuevo DNI generado: ${this.dni}</p>`)
    }
}

const nuevaPersona = new Persona('Andrés', 25, 41275066, 'H', 70, '1,83', 1998);

nuevaPersona.mostrarDatos();
nuevaPersona.esMayorDeEdad();
nuevaPersona.mostrarGeneracion();
nuevaPersona.generarDNI();

