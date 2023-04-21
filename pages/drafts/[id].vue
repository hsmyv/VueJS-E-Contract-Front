<template>
    <ContractLayout>

        <div class="p-6 space-y-2">
            <button v-if="$userStore.id === $generalStore.selectedDraft.user.id"
                class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
                @click="displayContract($generalStore.selectedDraft)">
                Edit</button>
            <h3 class="text-center my-4 text-3xl font-bold dark:bg-">{{ $generalStore.selectedDraft.name }}</h3>

            <p class="my-4 text-slate-500 dark:text-slate-900" style="white-space: pre-wrap;">{{
                $generalStore.selectedDraft.body }}</p>
        </div>

    </ContractLayout>
</template>

<script setup>
import ContractLayout from '~/layouts/ContractLayout.vue'
const { $generalStore, $userStore } = useNuxtApp()

const route = useRoute()
const router = useRouter()


onMounted(async () => {
    $generalStore.selectedDraft = null

    try {
        await $generalStore.getDraftById(route.params.id)
    } catch (error) {
        if (error && error.response.status === 400) {
            router.push('/')
        }


    }

})

const displayDraft = (draft) => {
    setTimeout(() => router.push(`/drafts/edit/${draft.id}`), 300)
}
</script>