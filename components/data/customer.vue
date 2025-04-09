
<template>
    <div class="mt-12 bg-white p-4 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">User List Table</h2>
        <div class="mb-4 md:w-1/4 w-1.2">
            <input
                v-model="searchQuery"
                placeholder="Search users..."
                class="w-full p-2 border rounded"
            />
        </div>
        <div>
            <div v-if="loading" class="text-gray-600 mb-2">Loading users...</div>
            <DxDataGrid v-else :data-source="filteredUsers" :show-borders="true" key-expr="id">
                <DxColumn data-field="name" caption="Name" />
                <DxColumn data-field="email" caption="Email" />
                <DxColumn data-field="age" caption="Age" />
                <DxColumn data-field="phone" caption="Phone" />
                <DxColumn data-field="address" caption="Address" />
                <DxColumn data-field="company" caption="Company" />
                <DxPaging :page-size="10" />
                <DxPager :visible="true" :allowed-page-sizes="[5, 10]" :display-mode="displayMode as 'full' | 'compact'"
                    :show-page-size-selector="showPageSizeSelector" :show-info="showInfo"
                    :show-navigation-buttons="showNavButtons" />
            </DxDataGrid>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../../stores/user';
import {
    DxDataGrid, DxColumn, DxPager,
    DxPaging
} from 'devextreme-vue/data-grid';

const displayModes: {
    text: string,
    value: string,
}[] = [
        { text: 'Display Mode \'full\'', value: 'full' },
        { text: 'Display Mode \'compact\'', value: 'compact' },
    ];
const displayMode = ref(displayModes[0].value);
const showPageSizeSelector = ref(true);
const showInfo = ref(true);
const showNavButtons = ref(true);
const searchQuery = ref('');

const userStore = useUserStore();
const { fetchUsers, searchUsers } = userStore;

onMounted(() => {
    fetchUsers()
})

const filteredUsers = computed(() => {
    return searchUsers(searchQuery.value);
});

const loading = computed(() => userStore.loading);
</script>