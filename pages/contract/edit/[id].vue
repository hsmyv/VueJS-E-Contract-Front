<template>
    <ContractLayout>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
              <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>
    
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <form>
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="name">Name</label>
                            <TextInput placeholder="contractName" v-model:input="contractName" inputType="text" max="30" />
                        </div>

                        <div>
                          <div class="w-96">
                              <div class="relative w-full min-w-[200px]">
                                <TextArea  v-model:input="contractBody"/>
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                  Content
                                </label>
                              </div>
                            </div>
                        </div>
            

      
                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                <button @click.prevent="updateContract()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                          </div>
                      </div>

                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </ContractLayout>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
import ContractLayout from '~/layouts/ContractLayout.vue';
     const { $generalStore, $userStore } = useNuxtApp()
    
    const route = useRoute()
    const router = useRouter()
    let contractName = ref('')
    let contractBody = ref('')
  
onMounted(async () => {
    try {
      
        await $generalStore.getContractById(route.params.id)
        contractName.value = $generalStore.selectedContract.name
        contractBody.value = $generalStore.selectedContract.body
    } catch (error) {
        if (error && error.response.status === 400) {
            router.push('/')
        }
    }
      
})
    const updateContract = async () => {
      
        try {
            await $userStore.updateContract(route.params.id, contractName.value, contractBody.value)
            router.push(`/contract/${route.params.id}`);
        } catch (error) {
            console.log(error)
        }
    }



</script>