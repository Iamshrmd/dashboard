<template>
 <div class="flex items-center justify-center w-full h-full">
        <canvas class="w-full h-full" id="myChart4"></canvas>
    </div>
</template>

<!-- <script>

const data = {
  labels: [
    'Red',
    'Blue',
  ],
  datasets: [{
    circumference:180,
    rotation:270,

    color:'#fff',
    borderColor:'transparent',
    label: 'My First Dataset',
    data: [200, 100],
    backgroundColor: [
        '#a9dfd8',
        '#2b2b36',
    ],
    hoverOffset: 4
  }],
};
const doughnutPointer= {
    id:'doughnutPointer',
    afterDatasetsDraw(chart,args,plugins){
        const {ctx, data}= chart;
        ctx.save();
        const xCenter = chart.getDatasetMeta(0).data[0].x
        const yCenter = chart.getDatasetMeta(0).data[0].y
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
        const doughnutThickness = outerRadius - innerRadius
        ctx.font='bold 50px sans-serif'
        ctx.fillStyle='white'
        ctx.textAlign='center'
        ctx.baseLine= 'middle'
        ctx.fillText('80%',xCenter,yCenter)

        ctx.translate(xCenter,yCenter)
        const angle = Math.PI / 180
        ctx.rotate(angle * 30 )
        ctx.beginPath()
        ctx.fillStyle='#a9dfd8'
        ctx.roundRect(0 - 2.5 ,-outerRadius - 10 , 15,doughnutThickness + 20 ,0)
        ctx.fill()
        ctx.restore()
    }
}
const ctx4 = document.getElementById('myChart4');
console.log(ctx4);
new Chart(ctx4, {
    type: 'doughnut',
    data: data,
    plugins:[doughnutPointer]
    }
  );

</script> -->
