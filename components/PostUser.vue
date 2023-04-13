<template>
   <a rel="noopener noreferrer" @click="displayContract(contract)" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
    					<img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="">
    					<div class="p-6 space-y-2">
      						<span class="text-xs dark:text-gray-400">Author :</span>                          
    						<h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ contract.name }}</h3>
                            <span class="text-xs dark:text-gray-400">{{contract.created_at}}</span>
    						<p>{{ contract.body }}</p>
    					</div>
    </a>
</template>

<script setup>

const {$generalStore} = useNuxtApp()
defineProps(['contract'])

const route = useRoute()
const router = useRouter()

const displayContract = (contract) => {
	setTimeout(() => router.push(`/contract/${contract.id}`), 300)
}


</script>