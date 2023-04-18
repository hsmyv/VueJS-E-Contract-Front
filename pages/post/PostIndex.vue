<template>
     <MainLayout>
            <div 
                class="pt-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 pr-2 w-[calc(100%-90px)] max-w-[1800px] 2xl:mx-auto">
                <div class="flex w-[calc(100vw-230px)]">
                
                   
                </div>


                <div  class="w-full flex items-center pt-4 border-b">
                    <div @click="isPictureHidden(false)" class="w-60 text-center py-2 text-[17px] font-semibold border-b-2" :class="{ 'border-b-black': !picturesHidden }"><Icon name="material-symbols:lock-open"/>Videos</div>
                    <div  @click="isPictureHidden(true)" class="w-60 text-gray-500 text-center py-2 text-[17px] font-semibold border-b-2" :class="{ 'border-b-black': picturesHidden }" >
                        <Icon name="material-symbols:lock-open" class="mb-0.5" /> Pictures
                    </div>
                </div>

                <div v-if="!picturesHidden" class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                    <div v-if="show" v-for="post in $generalStore.postVideos">
                        <VideoUser :post="post"/>
                    </div>
                </div>
                <div v-if="picturesHidden" class="mt-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                        <a href="">pictures</a>
                    </div>
            </div>
        </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { storeToRefs } from 'pinia';
const {$generalStore} = useNuxtApp()
const {postVideos} = storeToRefs($generalStore)

const route = useRoute()
let show = ref(false)

let picturesHidden = ref(false)

onMounted(async () => {
    try {
        await $generalStore.getPostVideos()
    } catch (error) {
        console.log(error)
    }
    console.log(picturesHidden)

})
const isPictureHidden = (bool) => {
    if(bool){
        picturesHidden.value = true
    }else{
        picturesHidden.value = false
    }
}
watch(() => postVideos.value, () => {
    setTimeout(() => show.value = true, 300)
})



</script>