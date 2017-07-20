/*     Active Customers thing      */
google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'CustomerID');
    data.addColumn('number', 'Hits');
    data.addRows([
        ['Active', 15],
        ['Inactive', 3]
    ]);

    var ActiveUsersChartOptions = {
        'title': 'Active Customers',
        'width': 400,
        'height': 300,
        slices: {
            0: { color: '#D76AAA' },
            1: { offset: 0.1, color: 'orange' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ActiveUsersChart'));
    chart.draw(data, ActiveUsersChartOptions);

/*     Active Customers thing      */

    var HitsChartOptions = {
        'title': 'HITS Ratio',
        'width': 400,
        'height': 300,
        slices: {
            0: { color: '#68D475'},
            1: { offset: 0.1, color: '#B04941' }
        },
        animation: {
            "startup": true,
            duration: 1000,
            easing: 'out',
        },
        vAxis: { minValue: 0, maxValue: 1000 }
    };

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'CustomerID');
    data.addColumn('number', 'Hits');
    data.addRows([
        ['Success', 10],
        ['Failed', 3]
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('HitsChart'));
    chart.draw(data, HitsChartOptions );
}


