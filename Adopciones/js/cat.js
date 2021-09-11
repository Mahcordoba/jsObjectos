function cat(id, name, raza,edad)
{
    this.fn = Animal
    this.fn(id, name, raza,edad)
}

cat.prototype= new Animal()
cat.prototype.constructor = cat
cat.prototype.sonido = function()
{
    console.log('Miauuu Miauuuu')
}