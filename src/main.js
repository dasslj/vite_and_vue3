import { createApp} from 'vue'
import './style.css'
import App from './App.vue'
import * as echarts from "echarts"




const app = createApp(App)

app.provide("$echarts", echarts)

app.mount('#app')
