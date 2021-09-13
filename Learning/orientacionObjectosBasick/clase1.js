//Objectos literales estos se parecen a los dipcionarios en python 
const students_platzi = 
{
    'Juan': 110,
    'Juanita':300,
    'Nora':700,
    'Luisa':0
}
//Los objectos literares no son lo mismo que las instancias de clase estos no se pueden instanciar.

const objectoLiteral = 
{
    atributo: 10,
    arrais: [1,10,30],

    // A los objectos literales tambien se le pueden agregar funciones  pero en este caso se la llamaran metodos
    //Forma 1 
    estaEsUnaFormaDeFuncion: function()
    {
        //Aqui hiria el código
    },
    //Forma 2 
    estaEsOtraForma()
    {
        //Here el código
    }
    //Ojo hay que poner la coma al final, en el ultimo no hay necesidad de la coma pero si se quiere sequir agregando datos hay que poner la coma.
}
// Pero recuerda estos no son moldes. son utiles cuando quieres crear uno o dos objectos literales pero si necesitas mas es mejor crear prototipo.

// Prototipos es como maneja los objectos js estos si se pueden instanciar antes se hacian así 

function students()
{
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
    // Para crear funciones hay varias formas
    //Primera forma
    this.estoEsFuncion= function()
    {
        //Aquí va el código
    }
}
//Segunda forma de agregar funciones 
students.prototype.estoEsOtraFuncion = function()
{
    //Código here
}

const Juanita = new students(); 
// con la palabra reserbada new instanciamos el prototipo que creamos. 

