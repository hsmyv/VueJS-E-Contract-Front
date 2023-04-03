<script setup>
    import useContracts from '../../composables/contracts';
    import { onMounted } from 'vue';
    import { ref } from "vue";


    const {contracts, getContracts, destroyContract} = useContracts();
    const search = ref('');
   const handleSearch = () => {
  getContracts(search.value);
};

    onMounted(() => getContracts());
</script>



<template>


    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <router-link :to="{name: 'ContractCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Create New Contract</router-link>
        </div>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">


    <section class="py-1 bg-blueGray-50">
        
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="col">
              <input type="text" v-model="search" @input="handleSearch" placeholder="Search...">
            </div>

            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3>
            </div>
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
            </div>
          </div>
        </div>

        
        <div class="block w-full overflow-x-auto">
          <table class="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Name
                            </th>
              <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Slug
                            </th>
               <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            
                            </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="contract in contracts" :key="contract.id">
                
                <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {{ contract.name }}
                </td>
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {{contract.slug}}
                </td>
                <td class="py-4 px-6 space-x-4">
                    <router-link :to="{ name: 'ContractEdit', params: { id: contract.id } }" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Edit</router-link>
                    <button @click="destroyContract(contract.id)" class="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded">Delete</button>

                </td>

              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
    <footer class="relative pt-8 pb-6 mt-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-6/12 px-4 mx-auto text-center">
            
          </div>
        </div>
      </div>
    </footer>
    </section>
    </div>
        
    
</template>