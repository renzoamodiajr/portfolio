var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SEO', 'PHP', 'jQuery', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap5', 'WordPress', 'Laravel', 'ReactJS'],
        datasets: [{
            data: [90, 80, 85, 80, 90, 90, 90, 70, 30, 25],
            backgroundColor: [
                '#FF4D06',
                '#000',
                '#FF4D06',
                '#000',
                '#FF4D06',
                '#000',
                '#FF4D06',
                '#000',
                '#FF4D06',
                '#000'
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 10,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                },
            }
        }
    }
});