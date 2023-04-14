<template>
    <ContractLayout>
        
        <div class="p-6 space-y-2">
    <button  v-if="$userStore.id === $generalStore.selectedContract.user.id" class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" @click="displayContract($generalStore.selectedContract)">
                                        Edit</button> 
        <h3 class="text-center my-4 text-3xl font-bold dark:bg-">{{$generalStore.selectedContract.name}}</h3>

        <p class="my-4 text-slate-500 dark:text-slate-900" style="white-space: pre-wrap;">{{ $generalStore.selectedContract.body }}</p>
        </div>

    </ContractLayout>
</template>

<script setup>
import ContractLayout from '~/layouts/ContractLayout.vue';
const { $generalStore } = useNuxtApp()

const route = useRoute()
const router = useRouter()


onMounted(async () => {
     $generalStore.selectedContract = null

    try {
      await $generalStore.getContractById(route.params.id)
    } catch (error) {
         if (error && error.response.status === 400) {
            router.push('/')
    }
      

}
    
})

const displayContract = (contract) => {
    setTimeout(() => router.push(`/contract/edit/${contract.id}`), 300)
}
</script>