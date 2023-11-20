/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(ISBN, titulo, autor, nroPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._nroPaginas = nroPaginas;
    }

    get ISBN() {
        return this._ISBN;
    }
    get titulo() {
        return this._titulo;
    }
    get autor() {
        return this._autor;
    }
    get nroPaginas() {
        return this._nroPaginas;
    }

    set ISBN(nuevoISBN) {
        if (nuevoISBN !== '') {
            this._ISBN = nuevoISBN;
        } else {
            alert('Ingrese un ISBN válido')
        }
    }
    set titulo(nuevoTitulo) {
        if (nuevoTitulo !== '') {
            this._titulo = nuevoTitulo;
        } else {
            alert('Ingrese un título válido')
        }
    }
    set autor(nuevoAutor) {
        if (nuevoAutor !== '') {
            this._autor = nuevoAutor;
        } else {
            alert('Ingrese un nombre de autor válido')
        }
    }
    set nroPaginas(nuevoNroPaginas) {
        if (nuevoNroPaginas > 0) {
            this._nroPaginas = nuevoNroPaginas;
        } else {
            alert('Ingrese la cantidad de páginas que tiene el libro')
        }
    }

    mostrarDatos(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas</p>`)
    }
}

const mangaNaruto = new Libro('978-607-5280-99-8','Naruto','Masashi Kishimoto', 72);
const mangaOnePiece = new Libro('912-123-8546-66-9', 'One Piece', 'Eiichiro Oda', 90)

mangaNaruto.mostrarDatos();
mangaOnePiece.mostrarDatos();

if(mangaNaruto.nroPaginas > mangaOnePiece.nroPaginas){
    document.write(`<p>${mangaNaruto.titulo} tiene más páginas (${mangaNaruto.nroPaginas})</p>`)
}else if(mangaNaruto.nroPaginas < mangaOnePiece.nroPaginas){
    document.write(`<p>${mangaOnePiece.titulo} tiene más páginas (${mangaOnePiece.nroPaginas})</p>`)
}else{
    document.write(`<p>${mangaOnePiece.titulo} y ${mangaNaruto.titulo} tienen la misma cantidad de páginas (${mangaNaruto.nroPaginas})</p>`)
}


