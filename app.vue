<template>
    <NuxtPage />
</template>
<script setup>
import { storeToRefs } from 'pinia';
const { $userStore, $generalStore } = useNuxtApp()

onMounted(async ()=> {

    try {
        await $generalStore.hasSessionExpired()

           if ($userStore.id) {
            $userStore.getUser()
        }
    } catch (error) {
        console.log(error)
    }
})
</script>