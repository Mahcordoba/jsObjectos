function Contrato(Animal, fechaAdopcion, Usuario)
{
    this.super = Document;
    this.super(Animal);
    this.fechaAdopcion=fechaAdopcion;
    this.salud;
    this.Usuario=Usuario;
}

Contrato.prototype = new Document();
Contrato.prototype.constructor = Contrato;
Contrato.prototype.datosContrato = function ()
{
    console.log(`El nombre de la mascota es ${this.super.name} y es una mascota muy cariñosa lo estas adoptando el di ${this.fechaAdopcion}`)
}
Contrato.prototype.datosSalud = function(salud)
{
    this.salud = salud
}
Contrato.prototype.adopcion= function()
{
    console.log(`El dueño de esa mascota es ${this.Usuario.name} y el estado de salud de esta es ${this.salud}`)
} 
