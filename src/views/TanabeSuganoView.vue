<script setup>
import D2Diagram from '../components/D2TanabeSugano.vue'
import D3Diagram from '../components/D3TanabeSugano.vue'
import D4Diagram from '../components/D4TanabeSugano.vue'
import D5Diagram from '../components/D5TanabeSugano.vue'
import D6Diagram from '../components/D6TanabeSugano.vue'
import D7Diagram from '../components/D7TanabeSugano.vue'
import D8Diagram from '../components/D8TanabeSugano.vue'
</script>

<template>
  <main style="overflow-y: auto; width: auto">
    <h1>
      Diagrams of the
      <a href="https://doi.org/10.1143/JPSJ.9.766" target="_blank" rel="opener"> Tanabe-Sugano </a>
    </h1>
    <D2Diagram class="diagram" />
    <D3Diagram class="diagram" />
    <D4Diagram class="diagram" />
    <D5Diagram class="diagram" />
    <D6Diagram class="diagram" />
    <D7Diagram class="diagram" />
    <D8Diagram class="diagram" />
  </main>
</template>

<style scoped>
.diagram {
  margin-bottom: 100px;
}
</style>
