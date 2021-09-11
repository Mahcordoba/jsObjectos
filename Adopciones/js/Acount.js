//Así se crean ahora las clases en js
class Acount
{
    constructor(id,name,lastname,email){
        this.id=id;
        this.name=name;
        this.lastname=lastname;
        this.email=email;
    }
    printData()
    {
        console.log(`El nombre es ${this.name} y su email es ${this.email}`)
    }
}


