function Loro(id, name, raza,edad,especie)
{
    this.super = Animal
    this.super(id, name, raza,edad,especie)
}

Loro.prototype= new Animal()
Loro.prototype.constructor = Loro
Loro.prototype.sonido = function()
{
    console.log('Soy un pajaro loro')
}