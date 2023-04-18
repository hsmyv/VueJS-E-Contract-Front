<template>
    <ContractLayout>
    	<section class="dark:bg-gray-800 dark:text-gray-100">
    		<div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
    			 <div class="items-center space-x-1">
					
                 <NuxtLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/contracts/create">
                                    Create</NuxtLink>             
                </div> 
				<div class="col">
	              <input type="text" v-model="search" @input="handleSearch" placeholder="Search...">
	            </div>
    			<div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    				<div  v-for="contract in $generalStore.contracts" :key="contract">
	                    <PostUser v-if="contract" :contract="contract" />
	                </div>
    			</div>
    			<div class="flex justify-center">
    				<button type="button" class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
    			</div>
    		</div>
    	</section>
    </ContractLayout>
</template>

<script setup>
import ContractLayout from '~/layouts/ContractLayout.vue';

const { $generalStore, $profileStore} = useNuxtApp()
const route = useRoute()

definePageMeta({ middleware: 'auth' })

const search = ref('')

onMounted(async () => {
	try {
		 $generalStore.getAllContracts()
	} catch (error) {
		console.log(error)
	}
})

const handleSearch = () => {
	$generalStore.getAllContracts(search.value);
	console.log(search)
}

</script>