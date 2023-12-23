<script>
import { energyLevels, energyElements, energyNames } from './utils/atomicData.js'
import { barChartConfig } from './utils/chartConfig.js'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
)

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
    shouldRenderSecondTable() {
      return this.selectedElements.some((element) => this.energyLevels[element].N1 != null)
    },
    tableMargin() {
      return -500 + this.selectedElements.length * 35
    },
    chartData() {
      return {
        labels: energyNames,
        datasets: this.selectedElements.map((element) => ({
          label: element,
          // Filter out the values for the key AtomicNumber
          data: Object.keys(this.energyLevels[element])
            .filter((key) => key != 'AtomicNumber')
            .map((key) => this.energyLevels[element][key])
            .sort((a, b) => b - a),
          backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
          borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
          // borderWidth: 1
        }))
      }
    }
  },
  methods: {
    resetSelection() {
      this.selectedElements = []
    }
  },
  data() {
    return {
      energyLevels: energyLevels,
      energyElements: energyElements,
      selectedElements: [],
      chartConfig: barChartConfig
    }
  }
}
</script>

<template>
  <div>
    <h2>
      Original data are provided by
      <a href="https://doi.org/10.1016/j.elspec.2015.03.010" target="_blank" rel="opener">Xclaim</a>
    </h2>
    <p>The energies are provieded in <code>eV</code> and are relative to the ground state.</p>
    <div class="separator"></div>
    <!-- Add this line -->
    <div class="checkbox-container">
      <div class="checkbox-item" v-for="(element, index) in energyElements" :key="index">
        <input type="checkbox" :id="element[0]" :value="element[0]" v-model="selectedElements" />
        <label :for="element[0]">{{ element[1] }} - {{ element[0] }}</label>
      </div>
      <div class="button-container">
        <button @click="resetSelection"><i class="fas fa-redo"></i></button>
      </div>
    </div>
    <div class="separator"></div>
    <!-- Add this line -->
    <div class="table-container" :style="{ 'margin-bottom': tableMargin + 'px' }">
      <table class="table-style">
        <thead>
          <tr>
            <th>Element</th>
            <th>K</th>
            <th>
              L<sub><i>1</i></sub>
            </th>
            <th>
              L<sub><i>2</i></sub>
            </th>
            <th>
              L<sub><i>3</i></sub>
            </th>
            <th>
              M<sub><i>1</i></sub>
            </th>
            <th>
              M<sub><i>2</i></sub>
            </th>
            <th>
              M<sub><i>3</i></sub>
            </th>
            <th>
              M<sub><i>4</i></sub>
            </th>
            <th>
              M<sub><i>5</i></sub>
            </th>
          </tr>
        </thead>
        <tbody class="tbody-style">
          <tr v-for="element in selectedElements" :key="element">
            <td>{{ element }}</td>
            <td>{{ energyLevels[element].K }}</td>
            <td>{{ energyLevels[element].L1 }}</td>
            <td>{{ energyLevels[element].L2 }}</td>
            <td>{{ energyLevels[element].L3 }}</td>
            <td>{{ energyLevels[element].M1 }}</td>
            <td>{{ energyLevels[element].M2 }}</td>
            <td>{{ energyLevels[element].M3 }}</td>
            <td>{{ energyLevels[element].M4 }}</td>
            <td>{{ energyLevels[element].M5 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="table-container"
      v-if="shouldRenderSecondTable"
      :style="{ 'margin-bottom': tableMargin + 'px' }"
    >
      <table class="table-style">
        <thead>
          <tr>
            <th>Element</th>
            <th>
              N<sub><i>1</i></sub>
            </th>
            <th>
              N<sub><i>2</i></sub>
            </th>
            <th>
              N<sub><i>3</i></sub>
            </th>
            <th>
              N<sub><i>4</i></sub>
            </th>
            <th>
              N<sub><i>5</i></sub>
            </th>
            <th>
              N<sub><i>6</i></sub>
            </th>
            <th>
              N<sub><i>7</i></sub>
            </th>
            <th>
              O<sub><i>1</i></sub>
            </th>
            <th>
              O<sub><i>2</i></sub>
            </th>
            <th>
              O<sub><i>3</i></sub>
            </th>
            <th>
              O<sub><i>4</i></sub>
            </th>
            <th>
              O<sub><i>5</i></sub>
            </th>
          </tr>
        </thead>
        <tbody class="tbody-style">
          <tr v-for="element in selectedElements" :key="element">
            <td>{{ element }}</td>
            <td>{{ energyLevels[element].N1 }}</td>
            <td>{{ energyLevels[element].N2 }}</td>
            <td>{{ energyLevels[element].N3 }}</td>
            <td>{{ energyLevels[element].N4 }}</td>
            <td>{{ energyLevels[element].N5 }}</td>
            <td>{{ energyLevels[element].N6 }}</td>
            <td>{{ energyLevels[element].N7 }}</td>
            <td>{{ energyLevels[element].O1 }}</td>
            <td>{{ energyLevels[element].O2 }}</td>
            <td>{{ energyLevels[element].O3 }}</td>
            <td>{{ energyLevels[element].O4 }}</td>
            <td>{{ energyLevels[element].O5 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="separator"></div>
    <div class="chart-container">
      <Bar id="energyLevels" ref="energyLevels" :options="chartConfig" :data="chartData" />
    </div>
  </div>
</template>

<style src="./utils/table.css"></style>
