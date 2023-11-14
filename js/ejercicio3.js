/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Geometria{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    get _alto(){
        return this.alto;
    }
    get _ancho(){
        return this.ancho;
    }
    set _alto(nuevoAlto){
        if (Number.isInteger(nuevoAlto) && nuevoAlto > 0){
            this.alto = nuevoAlto;
        }else {
            alert('Ingrese un valor válido')
        }
    }
    set _ancho(nuevoAncho){
        if (Number.isInteger(nuevoAncho) && nuevoAncho > 0){
            this.ancho = nuevoAncho;
        }else {
            alert('Ingrese un valor válido')
        }
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

const rectangulo = new Geometria(parseInt(prompt('Ingrese el alto del rectángulo')), parseInt(prompt('Ingrese el ancho del rectángulo')));
rectangulo.mostrarDatos();
rectangulo.calcularPerimetro();
rectangulo.calcularArea();