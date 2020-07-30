//HTMLからグラフを描画する要素（Canvas）を取得する。
var ctx = document.getElementById('bar-1').getContext('2d');

var lineChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['アメリカ 201709 - 201804', '中国2018 06', 'マレーシア 2019 02','台湾 2020 02-04'],
        datasets: [
            {
                type: 'bar', 
                label: '留学期間　月',
                data: [8,1,0.5,2], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(252, 2, 252, 0.2)',
                    'rgba(0, 252, 252, 0.2)',
                    ]
            }
        ]
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

var ctx = document.getElementById('bar-2').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ['2017 04', '2018 12', '2019 05'],
        datasets: [
            {
                type: 'line', 
                label: '0-990',
                data: [520,790,840], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(252, 2, 252, 0.2)',
                    'rgba(0, 252, 252, 0.2)',
                    ]
            }
        ]
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



