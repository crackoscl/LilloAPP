
const ventas = 'jsonapi';
const ventas_del_dia = 'jsonapi/ventasdeldia'
const Ventas_7_dias = 'jsonapi/ventassietedias'
const Ventas_del_mes = 'jsonapi/ventasdelmes'


function VentasDeldia(){
    
    fetch(ventas_del_dia)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){
        console.log(datos)

        if(datos.ventas.length > 0){

                const ventas_filtro = datos.ventas.reduce(
                    (anterior, producto) =>
                    Object.assign({}, anterior, {
                        [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
                    }),
                    {}
                )

            total = Object.values(ventas_filtro)
            prod = Object.keys(ventas_filtro)


            var ctx = document.getElementById('ventasdeldia').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
                    datasets: [{
                        label: 'Número de Ventas',
                        data: total,     //[10,20,30,20],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

    }else{

        let ctx = document.getElementById('ventasdeldia').getContext('2d');
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);;

    }
}

}//VENTAS DEL DIA 



function VentasDeldiaPorcentaje(){
    
    fetch(ventas_del_dia)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){

        if(datos.ventas.length > 0){

                    const ventas_filtro = datos.ventas.reduce(
                        (anterior, producto) =>
                        Object.assign({}, anterior, {
                            [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
                        }),
                        {}
                    )


                data = []

                filtro = Object.values(ventas_filtro)

                total = Object.values(ventas_filtro).reduce((acc,el)=>{
                    return acc + el
                })

                for (let i = 0; i < filtro.length; i++) {
                    const element = filtro[i] / total * 100;
                    data.push(parseInt(element))
                    
                }

                prod = Object.keys(ventas_filtro)


                var ctx = document.getElementById('ventasdeldiaporcentaje').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
                        datasets: [{
                            label: '% de  Ventas',
                            data: data,     //[10,20,30,20],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });




        }else{
            let ctx = document.getElementById('ventasdeldiaporcentaje').getContext('2d');
            ctx.font = "22px sans-serif";
            ctx.fillText(" No hay datos!", 50, 200);;
        }


}

}//VENTAS DEL DIA PORCENTAJE



function ventas_ultimos_7_dias(){
    
    fetch(Ventas_7_dias)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){
    const ventas_filtro = datos.ventas.reduce(
        (anterior, producto) =>
          Object.assign({}, anterior, {
            [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
          }),
        {}
    )

 total = Object.values(ventas_filtro)
 prod = Object.keys(ventas_filtro)


var ctx = document.getElementById('ventasdelasemana').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
        datasets: [{
            label: 'Número de Ventas',
            data: total,     //[10,20,30,20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

} // VENTAS DE LA SEMANA




function ventas_ultimos_7_dias_Porcetaje(){
    
    fetch(Ventas_7_dias)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){
    const ventas_filtro = datos.ventas.reduce(
        (anterior, producto) =>
          Object.assign({}, anterior, {
            [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
          }),
        {}
    )


data = []

filtro = Object.values(ventas_filtro)

 total = Object.values(ventas_filtro).reduce((acc,el)=>{
     return acc + el
 })

 for (let i = 0; i < filtro.length; i++) {
     const element = filtro[i] / total * 100;
     data.push(parseInt(element))
     
 }

 prod = Object.keys(ventas_filtro)


var ctx = document.getElementById('ventasdelasemanaporcentaje').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
        datasets: [{
            label: '% de  Ventas',
            data: data,     //[10,20,30,20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

}//VENTAS DE LA SEMANA %




function ventasdelmes(){
    
    fetch(Ventas_del_mes)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){
    const ventas_filtro = datos.ventas.reduce(
        (anterior, producto) =>
          Object.assign({}, anterior, {
            [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
          }),
        {}
    )

 total = Object.values(ventas_filtro)
 prod = Object.keys(ventas_filtro)


var ctx = document.getElementById('ventasdelmes').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
        datasets: [{
            label: 'Número de Ventas',
            data: total,     //[10,20,30,20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

} // VENTAS DEL MES


function ventasdelmesporcentaje(){
    
    fetch(Ventas_del_mes)
        .then(response => response.json())
        .then(datos => 
    total_ventas(datos)    
    )

    function total_ventas(datos){
    const ventas_filtro = datos.ventas.reduce(
        (anterior, producto) =>
          Object.assign({}, anterior, {
            [producto.nombre]: (anterior[producto.nombre] || 0) + producto.cantidad,
          }),
        {}
    )


data = []

filtro = Object.values(ventas_filtro)

 total = Object.values(ventas_filtro).reduce((acc,el)=>{
     return acc + el
 })

 for (let i = 0; i < filtro.length; i++) {
     const element = filtro[i] / total * 100;
     data.push(parseInt(element))
     
 }

 prod = Object.keys(ventas_filtro)


var ctx = document.getElementById('ventasdelmesporcentaje').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: prod,   //['completo', 'fajita', 'ass', 'bebidas'],
        datasets: [{
            label: '% de  Ventas',
            data: data,     //[10,20,30,20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

}//VENTAS DEL MES %




document.addEventListener("DOMContentLoaded", function(evento) {
    VentasDeldia()
    VentasDeldiaPorcentaje()
    ventas_ultimos_7_dias()
    ventas_ultimos_7_dias_Porcetaje()
    ventasdelmes()
    ventasdelmesporcentaje()
  });