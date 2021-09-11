function Hanster(id, name, raza,edad)
{
    this.super = Animal
    this.super(id, name, raza,edad)
}

Hanster.prototype= new Animal()
Hanster.prototype.constructor = Hanster
Hanster.prototype.sonido = function()
{
    console.log('No se como hace este animal')
}