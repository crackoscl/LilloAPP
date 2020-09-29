
const GetAllBuys = 'jsonapi';
const GetBuyofDay = 'jsonapi/ventasdeldia'
const GetBuyLastSevenDays = 'jsonapi/ventassietedias'
const GetBuysOfMont = 'jsonapi/ventasdelmes'


const iDBuysofDay = document.getElementById('ventasdeldia').getContext('2d');
const iDBuysofDayPorcent = document.getElementById('ventasdeldiaporcentaje').getContext('2d');
const IDLastSevenDaysBuys = document.getElementById('ventasdelasemana').getContext('2d');
const IDLastSevenDaysBuysPercent = document.getElementById('ventasdelasemanaporcentaje').getContext('2d');
const IdBuysMonth = document.getElementById('ventasdelmes').getContext('2d');
const IdBuysMonthPercent = document.getElementById('ventasdelmesporcentaje').getContext('2d')

const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]

const borderColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]

const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}


function BuysOfDay() {

    fetch(GetBuyofDay)
        .then(response => response.json())
        .then(data =>
            BuysOfDayData(data)
        )

}

const BuysOfDayData = (data) => {

    if (data.ventas.length > 0) {

        const buyFilter = data.ventas.reduce(
            (acc, el) =>
            Object.assign({}, acc, {
                [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
            }), {}
        )

        let total = Object.values(buyFilter)
        let prod = Object.keys(buyFilter)


        var ctx = iDBuysofDay
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: 'Número de Ventas',
                    data: total, //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });

    } else {
        let ctx = iDBuysofDay
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }

}

function BuysOfDayPercent() {
    fetch(GetBuyofDay)
        .then(response => response.json())
        .then(data =>
            BuysOfDayPercentData(data)
        )
}


function BuysOfDayPercentData(data) {

    if (data.ventas.length > 0) {

        const buyFilter = data.ventas.reduce(
            (acc, el) =>
            Object.assign({}, acc, {
                [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
            }), {}
        )

        let dataArr = []

        let buyfilterValue = Object.values(buyFilter)

        let total = Object.values(buyFilter).reduce((acc, el) => {
            return acc + el
        })

        for (let i = 0; i < buyfilterValue.length; i++) {
            const element = buyfilterValue[i] / total * 100;
            dataArr.push(parseInt(element))

        }

        prod = Object.keys(buyFilter)

        var ctx = iDBuysofDayPorcent
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: '% de  Ventas',
                    data: dataArr, //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });

    } else {
        let ctx = iDBuysofDayPorcent
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }
}

function BuyofLastSeventDays() {

    fetch(GetBuyLastSevenDays)
        .then(response => response.json())
        .then(data =>
            BuyofLastSeventDaysData(data)
        )
}

function BuyofLastSeventDaysData(data) {
    const buyFilter = data.ventas.reduce(
        (acc, el) =>
        Object.assign({}, acc, {
            [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
        }), {}
    )

    let total = Object.values(buyFilter)
    let prod = Object.keys(buyFilter)


    var ctx = IDLastSevenDaysBuys
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
            datasets: [{
                label: 'Número de Ventas',
                data: total, //[10,20,30,20],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: options
    });

}



function BuyofLastSeventDaysPercent() {

    fetch(GetBuyLastSevenDays)
        .then(response => response.json())
        .then(data =>
            BuyofLastSeventDaysPercentData(data)
        )
}


function BuyofLastSeventDaysPercentData(data) {
    const buyfilter = data.ventas.reduce(
        (acc, el) =>
        Object.assign({}, acc, {
            [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
        }), {}
    )


    let dataArr = []

    let buyfilterValue = Object.values(buyfilter)

    let total = Object.values(buyfilter).reduce((acc, el) => {
        return acc + el
    })

    for (let i = 0; i < buyfilterValue.length; i++) {
        const element = buyfilterValue[i] / total * 100;
        dataArr.push(parseInt(element))

    }

    let prod = Object.keys(buyfilter)


    var ctx = IDLastSevenDaysBuysPercent
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
            datasets: [{
                label: '% de  Ventas',
                data: dataArr, //[10,20,30,20],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: options
    });

}



function BuyOfMonth() {

    fetch(GetBuysOfMont)
        .then(response => response.json())
        .then(datos =>
            BuyOfMonthData(datos)
        )
}


function BuyOfMonthData(datos) {
    const buyfilter = datos.ventas.reduce(
        (acc, el) =>
        Object.assign({}, acc, {
            [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
        }), {}
    )

    let total = Object.values(buyfilter)
    let prod = Object.keys(buyfilter)


    var ctx = IdBuysMonth
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
            datasets: [{
                label: 'Número de Ventas',
                data: total, //[10,20,30,20],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: options
    });

}



function BuyOfMonthPercent() {

    fetch(GetBuysOfMont)
        .then(response => response.json())
        .then(data =>
            BuyOfMonthpercentData(data)
        )
}

function BuyOfMonthpercentData(data) {
    const buyfilter = data.ventas.reduce( //
        (acc, el) =>
        Object.assign({}, acc, {
            [el.nombre]: (acc[el.nombre] || 0) + el.cantidad,
        }), {}
    )

    let dataArr = []

    let buyfilterValue = Object.values(buyfilter) //

    let total = Object.values(buyfilter).reduce((acc, el) => { //
        return acc + el
    })

    for (let i = 0; i < buyfilterValue.length; i++) {
        const element = buyfilterValue[i] / total * 100;
        dataArr.push(parseInt(element))

    }

    let prod = Object.keys(buyfilter)

    var ctx = IdBuysMonthPercent
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: prod, //['completo', 'fajita', 'ass', 'bebidas'],
            datasets: [{
                label: '% de  Ventas',
                data: dataArr, //[10,20,30,20],
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: options
    });

}

document.addEventListener("DOMContentLoaded", function () {
    BuysOfDay()
    BuysOfDayPercent()
    BuyofLastSeventDays()
    BuyofLastSeventDaysPercent()
    BuyOfMonth()
    BuyOfMonthPercent()
});