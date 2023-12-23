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
import { chartD6Data } from './utils/tsData.js'

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
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { ChartLine },
  data() {
    return {
      chartData: chartD6Data,
      chartConfig: chartConfig,
      chartID: 'tanabeD6'
    }
  },
  methods: {
    resetGraph() {
      this.$refs.tanabeD6.chart.resetZoom()
    },
    showLegend() {
      this.chartConfig.plugins.legend.display = !this.chartConfig.plugins.legend.display
      this.$refs.tanabeD6.chart.update()
    }
  }
}
</script>

<template>
  <div class="chart-container">
    <h2>D6</h2>
    <p>
      With <code>B=1065cm<sup>-1</sup></code> and <code>&gamma;=4.808</code>
    </p>
    <button class="vue-button" @click="resetGraph"><i class="fas fa-redo"></i> Reset</button>
    <button class="vue-button" @click="showLegend"><i class="fas fa-list-ul"></i> Legend</button>
    <ChartLine
      id="tanabeD6"
      ref="tanabeD6"
      :options="chartConfig"
      :data="chartData"
      :dataset-id-key="chartID"
    />
  </div>
</template>

<style src="./utils/chart.css"></style>
