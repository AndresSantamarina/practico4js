/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
    color: 'rojo',
    marca: 'BMW',
    modelo: 'Sedán',
    encender: function(){
        document.write('<p>Auto encendido.</p>')
    },
    apagar: ()=>{
        document.write('<p>El auto se apagó.</p>')
    }
}

auto.encender();
auto.apagar();