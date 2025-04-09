<template>
  <div class="page-container">
    <div class="chart-container">
      <BarChart />
      <StockChart />
    </div>
    <div class="customer-container">
      <Customer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BarChart from '../components/data/BarChart.vue';
import StockChart from '../components/data/StockChart.vue';
import Customer from '../components/data/customer.vue';
</script>

<style scoped>
.page-container {
  padding: 1rem;
}

.chart-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.customer-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .chart-container {
    grid-template-columns: 1fr;
  }
}
</style>
