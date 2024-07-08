<template>
    <div class="flex items-center justify-center w-full h-full">
        <canvas id="myChart3" class="w-full h-full">.</canvas>
    </div>
</template>

<!-- <script>

const ctx3 = document.getElementById('myChart3');
console.log(ctx3);
const mixedChar3 = new Chart(ctx3, {
data: {
datasets: [{
    barThickness:10,
    pointRadius: 6,
    type: 'line',
    label: '',
    data: [50,100,30,260,180,200,300,280,500,100,400,200],
    borderRadius: 12,
    borderColor: '#A9DFD8',
    fill :true,
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
        gradientBg.addColorStop(0.5 , bgColor[0])
        gradientBg.addColorStop(1 , bgColor[1])
        return gradientBg

        }
    },
],
labels: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
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
                size: 24
            }
    },

  }
},
scales: {
y: {
    display: true,
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