/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo{
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }
    get alto(){
        return this._alto;
    }
    get ancho(){
        return this._ancho;
    }
    set alto(nuevoAlto){
        if (Number.isInteger(nuevoAlto) && nuevoAlto > 0){
            this._alto = nuevoAlto;
        }else {
            alert('Ingrese un valor válido')
        }
    }
    set ancho(nuevoAncho){
        if (Number.isInteger(nuevoAncho) && nuevoAncho > 0){
            this._ancho = nuevoAncho;
        }else {
            alert('Ingrese un valor válido')
        }
    }

    modificarDatos(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    mostrarDatos(){
        document.write(`<ul>
        <li>Alto: ${this.alto}</li>
        <li>Ancho: ${this.ancho}</li>
        </ul>`)
    }

    calcularPerimetro(){
        const perimetro = (this.alto * 2) + (this.ancho * 2);
        document.write(`<p>El perímetro del rectángulo es de ${perimetro}</p>`);
    }

    calcularArea(){
        const area = this.alto * this.ancho;
        document.write(`<p>El área del rectángulo es de ${area}</p>`)
    }
}

//He isntanciado el nuevo rectangulo con un valor fijo
const nuevoRectangulo = new Rectangulo(2, 1);

//No sé por qué las validaciones se dan después de los dos prompt y no después de cada uno
nuevoRectangulo.modificarDatos(parseInt(prompt('Alto')), parseInt(prompt('Ancho')));
nuevoRectangulo.mostrarDatos();
nuevoRectangulo.calcularPerimetro();
nuevoRectangulo.calcularArea();