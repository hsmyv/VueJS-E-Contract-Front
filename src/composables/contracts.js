import { ref } from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useContract(){

    const contracts = ref([]);
    const contract  = ref([]);
    const errors = ref({});
    const router = useRouter();
    const search = ref('');

        const getContracts = async (search) => {
        const response = await axios.get("contracts", {
            params: {
            search: search
            }
        });

        contracts.value = response.data.data;
        };


    const getContract = async (id) => {
        const response = await axios.get("contracts/" + id);
        contract.value = response.data.data;
    };

    const storeContract = async (data) => {
        try {
            await axios.post("contracts", data);
            await router.push({name:"ContractIndex"});
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateContract = async (id) => {
        try {
            await axios.put("contracts/" + id, contract.value);
            await router.push({name:"ContractIndex"});
        } catch (error) {
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyContract = async (id) => {
        if(!window.confirm("Are You Sure?")){
            return;
        }

        await axios.delete("contracts/" + id);
        await getContracts();
    };


    return {
        search,
        contract,
        contracts,
        getContract,
        getContracts,
        storeContract,
        updateContract,
        destroyContract,
        errors,
    };
}