<script setup>
import useContracts from '../../composables/contracts';
import { onMounted } from 'vue';

const { contract, getContract } = useContracts();

const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => getContract(props.id));
</script>


<template>
    <div>
    
    <h3 class="my-4 text-3xl font-bold dark:text-white">{{ contract.name }}</h3>

    <p class="my-4 text-gray-500 dark:text-gray-400" style="white-space: pre-wrap;">{{ contract.body }}</p>


    </div>
</template>