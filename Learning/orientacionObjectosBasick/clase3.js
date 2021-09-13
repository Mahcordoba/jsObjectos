//El encapsulamiento lo que busca es esconder metodos y variables pero js todo es publico. 
class Encapsulamiento 
{
    constructor(parametro1,parametro2)
    {
        this._parametro1 = parametro1;
        this._parametro2 = parametro2;
        // Por convención se usa un guion bajo para decir que es privado pero ojo esto no oculta el atributo
    }
    get parametro1()
    {
        return this._parametro1
    }

    set parametro1(nuevoParametro)
    {
        this._parametro1 = nuevoParametro
        // La gracias de setters es que se hagan validaciones para que no se cambien el parametro por cosas que no queremos
    }
}

const ejemplo = new Encapsulamiento('a',10)
ejemplo.parametro1 // sin necesidad de escribir los parentesis nos permite conocer el valor de la variable esto por el metodo get.
ejemplo.parametro1 = 'otracosa' // Así asignamos un nuevo nombre a la variable esto se puede gracias al metodo set.







// En ES2020 se introdujo la sintaxis campos privados en las clases. Se hace uso de un numeral como prefijo del nombre de la variable.