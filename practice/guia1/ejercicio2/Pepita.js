class Pepita 
{
    constructor()
    {
        this.joules = 0
    }
    comer(gramos)
    {
        this.joules+= gramos * 4
        if(this.joules > 50) console.log('Pepita se siente con mucha energia')
        else if(this.joules >500 && this.joules <1000) this.estaFeliz()
        else if(this.joules > 1000) console.log('Pepita tiene tanta energia que esta que etra al baño')
        else this.estaDevil()
    }
    volar(distancia)
    {
        if(this.joules > 10)
        {
            this.joules -= 10
            if(this.joules >= distancia)
            {
               this.joules -= distancia
               if(this.joules <= 50) this.estaDevil()
            }else
            {
                const kilo= distancia- this.joules
                console.log(`Pepita solo pudo recorrer ${kilo} ya que no tiene suficiente energia para continuar el viaje`)
                this.joules=0
            }
        }else console.log('Pepita no tiene suficiente energia para volar en este momento')
    }
    energia()
    {
        console.log(`La energia de pepita ${this.joules}`)
        if(this.joules <= 50) this.estaDevil()
        if(this.joules >500 && this.joules < 1000) this.estaFeliz()
    }
    estaDevil()
    {
        console.log('Pepita no se siente muy bien le hace falta energia')
    }
    estaFeliz()
    {
        console.log('pepita esta inpanciente por volar')
    }
    cuantoWantFly()
    {
        let fly = this.joules/5
        if(this.joules <=400 && this.joules >= 300) 
        {
            if(fly%20 == 0) fly +=20
            else fly +=25
        }
        console.log('Pepita quiere volar '+ fly + ' Kilómetros')
    }
}