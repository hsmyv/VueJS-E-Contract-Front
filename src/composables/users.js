
import { ref } from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function register(){

    const errors = ref([]);
    const router = useRouter();
    const authUser = ref([]);


    const register = async (data) => {
        try {
            await axios.post("register", data);
            await router.push({name:"home"})
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };
    const getAuthUser = async() => {
            const response = await axios.get("getAuthUser");
            authUser.value = response.data.data;
        };


    return {
        register,
        getAuthUser
    };

    

}