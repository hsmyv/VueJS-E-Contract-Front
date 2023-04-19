import { defineStore } from "pinia"
import { useUserStore } from "./user"
import axios from "../plugins/axios"


const $axios = axios().provide.axios

export const useGeneralStore = defineStore('general', {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    ids: null,
    isBackUrl: "/",
    selectedContract: null,
    contracts: null,
    search: null,
    posts: null,
    postVideos: null,
  
  }),
   actions: {

       bodySwitch(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'visible'
    },
     setBackUrl(url) {
        this.isBackUrl = url
    },

    async hasSessionExpired() {
          await $axios.interceptors.response.use((response) => {
        // Call was successful, continue.
        return response;
      }, (error) => {
          switch (error.response.status) {
              case 401: // Not logged in
              case 419: // Session expired
              case 503: // Down for maintenance
                  // Bounce the user to the login screen with a redirect back
                  useUserStore().resetUser()
                  window.location.href = '/';
                  break;
              case 500:
                  alert('Oops, something went wrong!  The team has been notified.');
                  break;
              default:
                  // Allow individual requests to handle other errors
                  return Promise.reject(error);
          }
      });
    },
     async getContractById(id) {
      let res = await $axios.get(`/api/contracts/${id}`)

      this.$state.selectedContract = res.data.contract[0]
      useUserStore.contract = res.data.contract[0]
      this.$state.ids = res.data.ids
    },
    async getAllContracts(search){
        let res = await $axios.get('/api/getContracts', {
          params:{search:search}
        });
        this.contracts = res.data
    },

     async getAllUsersAndPosts() {
      let res = await $axios.get('/api/home')
      this.posts = res.data
    },
      async getPostVideos(){
            let res = await $axios.get(`api/posts`)
            this.postVideos = res.data
        },


    shortDescrption(str){
       if (str) {
    return str.slice(0, 22) + "...";
  } else {
    return str;
  }
    }


},
    persist: true
 })