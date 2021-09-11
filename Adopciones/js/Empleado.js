class Empleado extends Acount
{
    constructor(id,name,lastname,email,user,pass)
    {
        super(id,name,lastname,email)
        this.user = user
        this.pass = pass
    }
}