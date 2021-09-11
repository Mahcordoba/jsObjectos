class Usuario extends Acount
{
    constructor(id,name,lastname,email)
    {
        super(id,name,lastname,email)
    }

    saludar()
    {
        console.log(`Hi! soy un cliente y mi name is: ${super.name}`)
    }
}