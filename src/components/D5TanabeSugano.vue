<script>
import { Line as ChartLine } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import 'hammerjs'
import { chartConfig } from './utils/chartConfig.js'
import { chartD5Data } from './utils/tsData.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  zoomPlugin
)

export default {
  name: 'LineChart',
  components: { ChartLine },
  data() {
    return {
      chartData: chartD5Data,
      chartConfig: chartConfig,
      chartID: 'tanabeD5'
    }
  },
  methods: {
    resetGraph() {
      this.$refs.tanabeD5.chart.resetZoom()
    },
    showLegend() {
      this.chartConfig.plugins.legend.display = !this.chartConfig.plugins.legend.display
      this.$refs.tanabeD5.chart.update()
    }
  }
}
</script>

<template>
  <div class="chart-container">
    <h2>D5</h2>
    <p>
      With <code>B=860cm<sup>-1</sup></code> and <code>&gamma;=4.477</code>
    </p>
    <button class="vue-button" @click="resetGraph"><i class="fas fa-redo"></i> Reset</button>
    <button class="vue-button" @click="showLegend"><i class="fas fa-list-ul"></i> Legend</button>
    <ChartLine
      id="tanabeD5"
      ref="tanabeD5"
      :options="chartConfig"
      :data="chartData"
      :dataset-id-key="chartID"
    />
  </div>
</template>

<style src="./utils/chart.css"></style>
