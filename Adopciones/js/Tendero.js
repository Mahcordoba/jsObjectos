class Tendero extends Empleado
{
    constructor(id,name,lastname,email,user,pass)
    {
        super(id,name,lastname,email,user,pass)
    }
    formularioAdopción()
    {
        console.log('Adopta y no abandones tus animales')
    }
}