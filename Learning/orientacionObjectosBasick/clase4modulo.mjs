function secreta1()
{
    console.log('Soy secret')
}
function escondida()
{
    return 'Me encontraste '
}
export class Informacion // Para exportar de un modulo se usa la palabra clave export
{
    constructor()
    {
        this.atributo='Solo soy una prueba';
    }
    llamarEscondida()
    {
        return (escondida() + this.atributo) 
    }
}