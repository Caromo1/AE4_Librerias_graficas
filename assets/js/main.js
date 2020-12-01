var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
            { 
            label: 'Rain',
            type: 'line',
            data: [0, 10, 5, 2, 20, 30, 45]
           
        },
        {
            label: 'Temperatura',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
  
});

