class Telefono
{
    constructor()
    {
        this.marcar = ''
    }
    agregarDigito(numero)
    {
        this.marcar += (''+numero)
    }
    numeroIngresado()
    {
        console.log(this.marcar)
    }
    esNumeroValido()
    {
        if(this.marcar.length === 5 || this.marcar.length === 7 || (this.marcar.charAt(0)==='1') && this.marcar.charAt(1) === '5') return true
        return false
    }
    llamar()
    {
        if(this.esNumeroValido) console.log(`Se esta llamando al siguiente numero ${this.marcar}`)
        else console.log('El numero ingresado es invalido')
        this.marcar = ''
    }
}