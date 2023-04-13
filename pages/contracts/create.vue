<template>
  <div v-if="isUploading"
          class="fixed flex items-center justify-center top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50">
          <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
      </div>
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
                    <label for="name">Full Name</label>
                      <input v-model="name" type="text" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                  </div>
            

      
                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
            <button @click.prevent="createContract()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Contract</button>
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
    import ContractLayout from '~/layouts/ContractLayout.vue';

    const { $userStore } = useNuxtApp()
    const router = useRouter()

    let name = ref('')
    let body = ref('')
    let errors = ref(null)
    let isUploading = ref(false)

    const createContract  = async () => {
        errors.value = null
        let data = new FormData();

        data.append('name', name.value || '')

        if(name.value)
        {
          isUploading.value = true
        }

        try {
          let res = await $userStore.createContract(data)
          console.log(res)
          if(res.status === 200){
            setTimeout(() => {
              router.push('/profile/' + $userStore.id)
              isUploading.value = false
            }, 1000);
          }
          
        } catch (error) {
          errors.value = error.response.data.errors
          isUploading.value = false
        }
    }
</script>