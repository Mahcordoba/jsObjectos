function Pajaro(id, name, raza,edad,especie)
{
    this.super = Animal
    this.super(id, name, raza,edad)
    this.especie = especie
}

Pajaro.prototype= new Animal()
Pajaro.prototype.constructor = Pajaro
Pajaro.prototype.sonido = function()
{
    console.log('Soy un pajaro generico')
}