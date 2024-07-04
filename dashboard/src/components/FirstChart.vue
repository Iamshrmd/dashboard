<template>
<div style="width:100%;height:100%;">
  <canvas style="width:100%;height:100%;" id="myChart"></canvas>
</div>
</template>

<script>
    const ctx = document.getElementById('myChart');

const mixedChart = new Chart(ctx, {
data: {
datasets: [{
    type: 'bar',
    label: 'volume',
    data: [40, 20, 30, 40,40,22],
    borderRadius: 10,
    backgroundColor:'#A9DFD8',
},
{
    type: 'bar',
    label: 'services',
    data: [30, 50, 50, 50,24,36, ],
    backgroundColor:'#2B2B36',
    borderRadius: 10,
}],
labels: ['', '', '', '','',''],
},
options: {
"plugins": {
  "legend": {
    "display": true,
    "position": "bottom",
    "align": "center",
    labels: {
        usePointStyle: true,
        boxWidth: 50,
        boxHeight:10,
        font: {
                size: 12
            }
    },
    scales: {
        xAxes: [{
            barPercentage: 0.5
        }]
    }

  }
},
scales: {
y: {
    display: false,
    stacked: true,
    grid: {
        display: false,
    }
},
x: {
    stacked: true,
    grid: {
        display: false,
    }
}

}
},
});


</script>
