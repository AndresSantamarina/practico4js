/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
    titular: 'Alex',
    saldo:0,
    ingresar: function(ingreso){
        if (ingreso > 0 && Number.isInteger(ingreso)){
            this.saldo = this.saldo + ingreso;
        }else{
            alert('Ingrese un valor válido')
        }
    },
    extraer: function(extraccion){
        if(extraccion >= 0 && Number.isInteger(extraccion) && extraccion < this.saldo){
            this.saldo = this.saldo - extraccion;
        }else{
            alert('Ingrese un valor válido')
        }
    },
    informar: function(){
        document.write(`El saldo disponible en la cuenta de ${this.titular} es de $${this.saldo} <br>`)
    }
}

cuenta.informar();
cuenta.ingresar(parseInt(prompt('Ingrese la cantidad de dinero a depositar')));
cuenta.extraer(parseInt(prompt('Ingrese la cantidad de dinero a extraer')));
cuenta.informar();