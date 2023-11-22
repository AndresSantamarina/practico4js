/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }

    get codigo(){
        return this._codigo;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    
    set codigo(nuevoCodigo){
        if (nuevoCodigo !== ''){
            this._codigo = nuevoCodigo;
        }else{
            alert('No se permiten campos vacíos')
        }
        
    }
    set nombre(nuevoNombre){
        if (nuevoNombre !== ''){
            this._nombre = nuevoNombre;
        }else{
            alert('No se permiten campos vacíos')
        }
    }
    set precio(nuevoPrecio){
        if (nuevoPrecio !== ''){
            this._precio = nuevoPrecio;
        }else{
            alert('No se permiten campos vacíos')
        }
    }

    imprimirDatos(){
        document.write(`<ul>
        <li>Código: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
        </ul>`)
    }
}

const playStation = new Producto(123, 'Play Station 5', 500000);
const xbox = new Producto(321, 'Xbox Series S', 450000);
const nintendoSwitch = new Producto(912, 'Nintendo Switch', 275000);

const productos = [playStation, xbox, nintendoSwitch];

for (i = 0; i < productos.length; i++){
    productos[i].imprimirDatos();
}