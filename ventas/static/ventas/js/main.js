const GetAllSales = 'jsonapi';
const GetSaleofDay = 'jsonapi/ventasdeldia'
const GetSaleLastSevenDays = 'jsonapi/ventassietedias'
const GetSalesOfMont = 'jsonapi/ventasdelmes'

const iDSalesofDay = document.getElementById('ventasdeldia').getContext('2d');
const iDSalesofDayPorcent = document.getElementById('ventasdeldiaporcentaje').getContext('2d');
const IDLastSevenDaysSales = document.getElementById('ventasdelasemana').getContext('2d');
const IDLastSevenDaysSalesPercent = document.getElementById('ventasdelasemanaporcentaje').getContext('2d');
const IdSalesMonth = document.getElementById('ventasdelmes').getContext('2d');
const IdSalesMonthPercent = document.getElementById('ventasdelmesporcentaje').getContext('2d')

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


const CreateFilter = data => data.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: (acc[el.nombre] || 0) + el.cantidad
}), {});

const SumValues = data => data.reduce((acc, el) => acc + el)


function SalesOfDay() {

    fetch(GetSaleofDay)
        .then(response => response.json())
        .then(SalesOfDayData)
}

const SalesOfDayData = (data) => {

    if (data.ventas.length) {

        var ctx = iDSalesofDay
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: prod = Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: 'Número de Ventas',
                    data: total = Object.values(CreateFilter(data.ventas)), //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });

    } else {
        let ctx = iDSalesofDay
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }

}

function SalesOfDayPercent() {
    fetch(GetSaleofDay)
        .then(response => response.json())
        .then(SalesOfDayPercentData)
}


function SalesOfDayPercentData(data) {

    if (data.ventas.length) {

        const DataValue = Object.values(CreateFilter(data.ventas))


        const ValuesMap = DataValue.map(values => values / SumValues(DataValue) * 100)

        var ctx = iDSalesofDayPorcent
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: prod = Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: '% de  Ventas',
                    data: ValuesMap, //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });

    } else {
        let ctx = iDSalesofDayPorcent
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }
}

function SaleofLastSeventDays() {

    fetch(GetSaleLastSevenDays)
        .then(response => response.json())
        .then(SaleofLastSeventDaysData)

}

function SaleofLastSeventDaysData(data) {


    if (data.ventas.length) {

        var ctx = IDLastSevenDaysSales
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: prod = Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas']
                datasets: [{
                    label: 'Número de Ventas',
                    data: total = Object.values(CreateFilter(data.ventas)), //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });
    } else {
        let ctx = IDLastSevenDaysSales
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }
}


function SaleofLastSeventDaysPercent() {


    fetch(GetSaleLastSevenDays)
        .then(response => response.json())
        .then(SaleofLastSeventDaysPercentData)
}


function SaleofLastSeventDaysPercentData(data) {

    if (data.ventas.length) {

        const DataValue = Object.values(CreateFilter(data.ventas))

        const ValuesMap = DataValue.map(values => values / SumValues(DataValue) * 100)

        var ctx = IDLastSevenDaysSalesPercent
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: prod = Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas']
                datasets: [{
                    label: '% de  Ventas',
                    data: ValuesMap, //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });
    } else {
        let ctx = IDLastSevenDaysSalesPercent
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }

}

function SaleOfMonth() {

    fetch(GetSalesOfMont)
        .then(response => response.json())
        .then(SaleOfMonthData)
}


function SaleOfMonthData(data) {
    if (data.ventas.length) {

        var ctx = IdSalesMonth
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: 'Número de Ventas',
                    data: total = Object.values(CreateFilter(data.ventas)), //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });
    } else {
        let ctx = IdSalesMonth
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }
}


function SaleOfMonthPercent() {


    fetch(GetSalesOfMont)
        .then(response => response.json())
        .then(SaleOfMonthpercentData)
}

function SaleOfMonthpercentData(data) {

    if (data.ventas.length) {

        const DataValue = Object.values(CreateFilter(data.ventas))

        const ValuesMap = DataValue.map(values => values / SumValues(DataValue) * 100)

        var ctx = IdSalesMonthPercent
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: prod = Object.keys(CreateFilter(data.ventas)), //['completo', 'fajita', 'ass', 'bebidas'],
                datasets: [{
                    label: '% de  Ventas',
                    data: ValuesMap, //[10,20,30,20],
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: options
        });
    } else {
        let ctx = IdSalesMonthPercent
        ctx.font = "22px sans-serif";
        ctx.fillText(" No hay datos!", 50, 200);
    }

}

document.addEventListener("DOMContentLoaded", function () {
    SalesOfDay()
    SalesOfDayPercent()
    SaleofLastSeventDays()
    SaleofLastSeventDaysPercent()
    SaleOfMonth()
    SaleOfMonthPercent()
});