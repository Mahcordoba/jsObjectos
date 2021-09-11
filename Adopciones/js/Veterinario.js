class Veterinario extends Empleado
{
    constructor(id,name,lastname,email,user,pass)
    {
        super(id,name,lastname,email,user,pass)
    }
    certificados()
    {
        console.log('Esta no hace nada por el momento')
    }
}