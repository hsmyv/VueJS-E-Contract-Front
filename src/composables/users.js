
import { ref, onMounted } from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000";

axios.defaults.withCredentials = true;
export default function register(){

    const errors = ref([]);
    const router = useRouter();
    const authUser = ref();

    const register = async (data) => {
        try {  
            await axios.post("/register", data);
            await router.push({name:"home"})
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };
    const getToken = async () =>{
        await axios.get("/sanctum/csrf-cookie");
    };

    const login = async (data) => {   
            getToken();             
            //await axios.post("/login", data);
            //await router.push({name:"home"})
        try {
            await axios.post("/login", data).then(res => { 
                if(res.data.success){
                    localStorage.setItem('token', res.data.data.token)
                }else{
                    errors.value = res.data.message;
                }});
            await router.push({name:"home"})
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
        let {dat} = await axios.get("/api/user");
        authUser.value = dat;
    };


    //   onMounted(async() =>{
    //      try {
    //          const response  = await axios.get('/api/logged-in-user');
    //          authUser.value = response.data;
    //      } catch (error) {
    //          console.error(error);

    //      }
        
     //});



    return {
        register,
        login,
        authUser

    };

    

}