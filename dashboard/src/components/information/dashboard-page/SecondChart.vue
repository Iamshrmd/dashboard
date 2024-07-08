<template>
<div class="flex items-center justify-center w-full h-full">
    <canvas  class="w-full h-full" id="myChart2"></canvas>
</div>
</template>

<!-- <script>
    const ctx2 = document.getElementById('myChart2');
    console.log(ctx2);
const mixedChar = new Chart(ctx2, {
data: {
datasets: [
    {
    pointRadius: 6,
    type: 'line',
    label: 'last Month',
    data: [30, 25, 30, 25, 35, 20],
    borderRadius: 12,
    borderColor: '#F2C8ED',
    fill :true,
    backgroundColor: (context)=>{
        const bgColor = [
            "#F2C8ED", "transparent"
        ];

        if(!context.chart.chartArea){
            return;
        }

        const {ctx, data, chartArea: {top, bottom} }= context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0 , bgColor[0])
        gradientBg.addColorStop(0.5 , bgColor[0])
        gradientBg.addColorStop(1 , bgColor[1])
        return gradientBg

    }
},
{
    pointRadius: 6,
    type: 'line',
    label: 'This Month',
    data: [40, 35, 40, 35, 40, 35],
    backgroundColor: (context)=>{
        const bgColor = [
            "#A9DFD8", "transparent"
        ];

        if(!context.chart.chartArea){
            return;
        }

        const {ctx, data, chartArea: {top, bottom} }= context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0 , bgColor[0])
        gradientBg.addColorStop(1 , bgColor[1])
        return gradientBg

    },
    borderColor: '#A9DFD8',
    borderRadius: 12,
    fill :true,
},
],
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
        boxWidth: 100,
        boxHeight:10,
        font: {
                size:12
            }
    },

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

</script> -->

