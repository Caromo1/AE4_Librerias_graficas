let lluv = [40, 60, 110, 70, 20, 15, 10, 15, 90, 120, 80, 50];
let tempa = [3, 4, 3, 5, 7, 10, 12, 15, 12, 10, 7, 5];
let mes2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [
            {
                label: 'mm3',
                type: 'line',
                data: lluv

            },
            {
                label: 'ºC',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: tempa
            }
        ],
        
    },
});

function validaform() {

    
    const mesid = document.getElementById("meses").value;
    const tempid = document.getElementById("temperatura").value;
    const lluviasid = document.getElementById("lluvia").value;
    const arraymesesid = mesid.split(",");
    const arraytempid = tempid.split(",");
    const arraylluviaid = lluviasid.split(",");


    if (mesid == "" && tempid == "" && lluviasid == ""){
        alert("Introduce datos");
    } else if (mesid.length == tempid.length && mesid.length == lluviasid.length && lluviasid.length== tempid.length) {
        alert("Datos correctos");
        arraymesesid.forEach((element, index) => {
            lluv[element - 1] = arraylluviaid[index];
            tempa[element - 1] = arraytempid[index];
        });
        chart.update();
    }
    
}












