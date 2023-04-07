
import { ref, onMounted } from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000";

axios.defaults.withCredentials = true;

export default function register(){

    const errors = ref([]);
    const router = useRouter();
    const authUser = ref();
    const token = localStorage.getItem('token');
    const register = async (data) => {
        try {  
            await axios.post("http://127.0.0.1:8000/register", data);
            await router.push({name:"home"})
        } catch (error) {

            console.log(error);
        }
    };
    
    const getToken = async () =>{
        await axios.get("/sanctum/csrf-cookie");
    };

    const login = async (data) => {   
            await getToken();             
        try {
            await axios.post("http://127.0.0.1:8000/login", data).then(res => { 
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
         let response = await axios.get("http://127.0.0.1:8000/api/user");
      console.log(response.data);
    };

    const logout = async() => {
        await axios.post("http://127.0.0.1:8000/logout");
    };





    return {
        register,
        login,
        logout,
        authUser,
        token

    };

    

}