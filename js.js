    function getDatos()
    {
        //capturando los datos
        var nombre = document.getElementById("name").value
        var edad = document.getElementById("edad").value
        var estado = document.getElementById("select").value
        var cuotas_pagadas = document.getElementById("cuotas").value
        var anios_servicio = document.getElementById("servicio").value
        var prom_salario1 = document.getElementById("anio1").value
        var prom_salario2 = document.getElementById("anio2").value
        var prom_salario3 = document.getElementById("anio3").value
        var prom_salario4 = document.getElementById("anio4").value
        var prom_salario5 = document.getElementById("anio5").value
        
        
        
       

        //se guardan los valores de manera local o almacenamiento local 
        localStorage.setItem("respuesta1", nombre)
        localStorage.setItem("respuesta2", edad)
        localStorage.setItem("respuesta3",estado)
        localStorage.setItem("respuesta4",cuotas_pagadas)
        localStorage.setItem("respuesta5",anios_servicio)
        localStorage.setItem("respuesta6",prom_salario1)
        localStorage.setItem("respuesta7",prom_salario2)
        localStorage.setItem("respuesta8",prom_salario3)
        localStorage.setItem("respuesta9",prom_salario4)
        localStorage.setItem("respuesta10",prom_salario5)
       

        
    }