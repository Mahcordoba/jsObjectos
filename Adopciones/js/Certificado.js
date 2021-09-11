function Certificado(Animal)
{
    this.fn = Document
    this.fn(Animal)   
}

Certificado.prototype = new Document()
Certificado.prototype.constructor = Certificado;

Certificado.prototype.estadoSalud=function()
{
    return true
}