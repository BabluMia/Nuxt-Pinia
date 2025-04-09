<template>
  <div class="page-container">
    <div class="chart-container">
      <BarChart />
      <div class="chart-wrapper">
        <StockChart />
      </div>
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
  gap: 0.5rem; /* Reduced gap between charts */
  margin-bottom: 2rem;
}

.chart-container > div,
.chart-wrapper {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.customer-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .chart-container {
    grid-template-columns: 1fr;
    gap: 1rem; /* Slightly larger gap for mobile */
  }
}
</style>
