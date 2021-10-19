class Calculadora
{
    constructor()
    {
        this.numero = 0
    }
    cargar(numero)
    {
        this.numero = numero
    }
    sumar(numero)
    {
        this.numero += numero
    }
    restar(numero)
    {
        this.numero -= numero
    }
    multiplicar(numero)
    {
        this.numero *= numero
    }
    dividir(numero)
    {
        this.numero = this.numero / numero
    }
    valorActual()
    {
        console.log(this.numero)
    }
}