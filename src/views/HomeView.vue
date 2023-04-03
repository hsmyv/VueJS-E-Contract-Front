<script setup>
import { reactive } from 'vue';
import users from '../composables/users';
const { getAuthUser } = users();


const state = reactive({
  authUser: null,
});

async function fetchAuthUser(){
  state.authUser = await getAuthUser();
}

fetchAuthUser();
</script>


<template>
  <main>
    <h1>{{ authUser.name }}</h1>
</main>
</template>
