<template>
   <a rel="noopener noreferrer" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
    					<img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" src="">
    					<div class="p-6 space-y-2">
      						<NuxtLink :to="`/profile/${contract.user.id}`"><span class="text-xs dark:text-gray-400">Author : {{ contract.user.name}}</span> </NuxtLink>                        
    						<h3 @click="displayContract(contract)" class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ contract.name }}</h3>
                            <span class="text-xs dark:text-gray-400">{{contract.created_at}}</span>
    						<p>{{ $generalStore.shortDescrption(contract.body) }}</p>
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