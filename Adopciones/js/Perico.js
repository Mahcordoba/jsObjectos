function Perico(id, name, raza,edad,especie)
{
    this.super = Animal
    this.super(id, name, raza,edad,especie)
}

Perico.prototype= new Animal()
Perico.prototype.constructor = Perico
Perico.prototype.sonido = function()
{
    console.log('Soy un pajaro que queda muy bién con tomate y cebolla')
}