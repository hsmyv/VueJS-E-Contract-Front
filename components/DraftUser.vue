<template>
    <a rel="noopener noreferrer" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
        <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="~/assets/images/contract.jpg">
        <div class="p-6 space-y-2">
            <NuxtLink :to="`/profile/${draft.user.id}`"><span class="text-xs dark:text-gray-400">Author : {{
                draft.user.name }}</span> </NuxtLink>
            <h3 @click="displayContract(draft)"
                class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ draft.name }}</h3>
            <span class="text-xs dark:text-gray-400">{{ draft.created_at }}</span>
            <p>{{ $generalStore.shortDescrption(draft.body) }}</p>
        </div>
    </a>
</template>

<script setup>

const { $generalStore } = useNuxtApp()
defineProps(['draft'])

const route = useRoute()
const router = useRouter()

const displayContract = (draft) => {
    setTimeout(() => router.push(`/drafts/${draft.id}`), 300)
}


</script>