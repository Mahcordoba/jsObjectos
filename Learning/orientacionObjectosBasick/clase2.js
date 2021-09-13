// Las clases en js siguen siendo prototipos, La sintaxi con la que se escribe es mas familiar a otros lenguajes 
class Estudent
{
    //Este forma de crear prototipos necesita de un constructor 
    constructor(parametro1,parametro2)
    {
        this.parametro1 = parametro1
        this.parametro2 = parametro2
    }
    // para crear metodos usamos la siguiente sintaxis tambien se pueden crear funciones con this pero estas deben crearse en el contructor
    unaFuncion()
    {
        console.log('Soy una función')
    }
}

// para instanciar usamos la misma sintaxis de un prototipo

const prueba = new Estudent('Hola' , 'Hola2')

//Pero gracias al root de js se pueden pedir objetos literales en los prototipos y en las clases so lo hay que hacerlo así

class Student 
{
    constructor({
        parametro1,
        parametro2,
        nombre,
    })
    {
        this.parametro1 = parametro1
        this.parametro2 = parametro2
        this.nombre = nombre
    }
}

const prueba2 = new Student({
    nombre: 'Pablito',
    parametro1: '',
    parametro2: 'gagsgas'
})
// La ventaja de enviar objectos no importa el orden de como enviemos la informacion esta llegara a su destino