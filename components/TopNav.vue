<template>
    <header>
        <div id="TopNav">
        <!-- navbar goes here -->
        <nav class="bg-gray-100">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">

                    <div class="flex space-x-4">
                        <!-- logo -->
                        <div>
                            <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span class="font-bold">E-Contract</span>
                            </a>
                        </div>

                        <!-- primary nav -->
                        <div class="hidden md:flex items-center space-x-1">
                            <NuxtLink to="/" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home
                            </NuxtLink>
                            <NuxtLink to="/contracts/ContractIndex" class="py-5 px-3 text-gray-700 hover:text-gray-900">Contracts
                            </NuxtLink>
                             <NuxtLink to="/post/PostIndex" class="py-5 px-3 text-gray-700 hover:text-gray-900">Blog
                                </NuxtLink>

                        </div>
                    </div> 

                    <!-- secondary nav -->
                    <div v-if="!$userStore.id" class="hidden md:flex items-center space-x-1">
                        
                        <NuxtLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/login">
                            Login</NuxtLink>
                        <NuxtLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
                            to="/register">Signup</NuxtLink>
                        
                    </div>
                    
                        <div v-if="$userStore.id" class="flex items-center space-x-1">
                            <button @click="isLoggedIn()" class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100">
                            <Icon name="mdi:plus" color="#000000" size="22" />
                            <span class="px-2 font-medium text-[15px]">Upload</span>
                        </button>
                            <NuxtLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
                                :to="`/profile/${$userStore.id}`">Profile</NuxtLink>
                            <button class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white"
                            @click="logout()">Logout</button>

                    </div>

                    <!-- mobile button goes here -->
                    <div class="md:hidden flex items-center">
                        <button class="mobile-menu-button">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <!-- mobile menu -->
            <div class="mobile-menu hidden md:hidden">
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
            </div>
        </nav>
        </div>


</header>


</template>


<script setup>

import { storeToRefs } from 'pinia';

const {$userStore} = useNuxtApp()
const {name} = storeToRefs($userStore)




const route = useRoute()
const router = useRouter()

onMounted(() => {
    userName.value = name.value
})

let userName = ref(null)

const logout = () => {
    try {
        $userStore.logout()
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}

const isLoggedIn = () => {
    if ($userStore.id) {
        router.push('/upload')
    } else {
        router.push('/login')
    }
}


</script>