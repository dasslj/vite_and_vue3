<script setup>
import {inject} from "vue"
const $echarts = inject("$echarts")

let gaugeData = 70

const echartsData = () =>{
  serier:[
    {
      type:"gauge",
      axisLine:{
        lineStyle:{
          width:30,
          color:[
            [0.3,"#67e0e3"],
            [0.7,"#37a2da"],
            [1,"#fd666d"]
          ]
        }
      },
      pointer:{
        itemStyle:{
          color:"auto"
        }
      },
      axisTick:{
        distance:-30,
        length:8,
        lineStyle:{
          color:"#fff",
          width:2
        }
      },
      splitLine:{
        distance:-30,
        length:30,
        lineStyle:{
          color:"#fff",
          width:"4"
        }
      },
      axisLabel:{
        color:"auto",
        distance:40,
        fontSize:20
      },
      detail:{
        valueAnimation:true,
        formatter:"{value}km/m",
        color:"auto"
      },
      data:[
        {
          value: gaugeData
        }
      ]
    }
  ]
}

const myEcharts = (e, opt) =>{
  const myChart = $echarts.init(document.querySelector(e))

  myChart.setOption(opt)
  window.addEventListener("resize", function(){
    myChart.resize()
  })
  return myChart
}

onMounted(() => {
  let c1 = myEcharts("#c1", echartsData)
  let c2 = myEcharts("#c2", echartsData)
  let c3 = myEcharts("#c3", echartsData)
})

</script>

<template>
  <div>
    <div id="c1"></div>

    <div id="c2"></div>

    <div id="c3"></div>
  </div>
</template>

<style scoped>
#c1{
  width: 300px;
  height: 300px;
  border: 1px red solid;
}
#c2{
  width: 300px;
  height: 300px;
  border: 1px red solid;
}
#c3{
  width: 300px;
  height: 300px;
  border: 1px red solid;
}
</style>
