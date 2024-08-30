let jubilacion_total = {

datoa: document.getElementById("dato1").innerHTML=localStorage.getItem("respuesta1"),
datob: document.getElementById("dato2").innerHTML=localStorage.getItem("respuesta2"),
datoc: document.getElementById("dato3").innerHTML=localStorage.getItem("respuesta3"),
datod: document.getElementById("dato4").innerHTML=localStorage.getItem("respuesta4"),
datoe: document.getElementById("dato5").innerHTML=localStorage.getItem("respuesta5"),
datof: document.getElementById("dato6").innerHTML=localStorage.getItem("respuesta6"),
datog: document.getElementById("dato7").innerHTML=localStorage.getItem("respuesta7"),
datoh: document.getElementById("dato8").innerHTML=localStorage.getItem("respuesta8"),
datoi: document.getElementById("dato9").innerHTML=localStorage.getItem("respuesta9"),
datoj: document.getElementById("dato10").innerHTML=localStorage.getItem("respuesta10"),

    promedio:  function(){
        promedio2 = ((parseInt(this.datof) + parseInt(this.datog) + parseInt(this.datoh) + parseInt(this.datoi) + parseInt(this.datoj))/5)
        return promedio2
    },

    calcular: function() {
        if (parseInt(this.datob)>= 55 && parseInt(this.datoe) >= 20 && parseInt(this.datod) >= 240 )
            {resultado = ((parseInt(jubilacion_total.promedio())*80)/100)} 
        else 
            {alert("no te puedes jubilar")}
        return resultado
    }
}
document.write('<h2>promedio de salario: ', jubilacion_total.promedio(),' </h2>')
document.write('<h2>monto de jubilacion: ', jubilacion_total.calcular(),' </h2>')
