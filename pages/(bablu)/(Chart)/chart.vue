<script setup lang="ts">
import BarChart from '../../../components/data/BarChart.vue';
import StockChart from '../../../components/data/StockChart.vue';
import { useTestStore } from '../../../stores/test';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const testStore = useTestStore();
const { message } = storeToRefs(testStore); // Use storeToRefs for reactivity
const inputMessage = ref('');

const updateMessage = () => {
  testStore.updateMessage(inputMessage.value);
  inputMessage.value = '';
};
</script>

<template>
  <h1>Store Message: {{ message }}</h1>
  <div>
    <input v-model="inputMessage" placeholder="Enter new message" />
    <button @click="updateMessage">Change Message</button>
  </div>
  <BarChart />
  <StockChart />
</template>
