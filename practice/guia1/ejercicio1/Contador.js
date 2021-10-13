class Contador
{
    constructor(inicio = 0)
    {
        this.inicio = inicio
        this.texto =''
    }
    resect()
    {
        this.inicio=0
        this.texto = 'Reseteo'
    }
    valorActual()
    {
        console.log(this.inicio)
        this.texto='Valor actual'
    }
    inc()
    {
        this.inicio ++
        this.texto='Incremento'
    }
    dec()
    {
        this.inicio --
        this.texto='Decremento'
    }
    ultimoComando()
    {
        console.log(this.texto)
        this.texto='Ultimo comando'
    }
}