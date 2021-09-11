function Perro(id, name, raza,edad)
{
    this.super = Animal
    this.super(id, name, raza,edad)
}

Perro.prototype= new Animal()
Perro.prototype.constructor = Perro
Perro.prototype.sonido = function()
{
    console.log('Guauuu Guauuuu')
}