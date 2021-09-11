// Así funcionaban las clases antes en javaScript
// Con el EcmaScript 6 ahora es mucho mas facil hacer las clases solo hay que escribir clases
function Document(Animal)
{
    this.Animal=Animal;
}
Document.prototype.printAnimal = function ()
{
    console.log(`El id es ${this.Animal.id} y su nombre es ${this.Animal.name}`)
}