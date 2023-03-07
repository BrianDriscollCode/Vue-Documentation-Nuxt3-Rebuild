<!-- <template>
    <main>
        <h1> Login Page </h1>
        <button @click="getAccounts"> Get Accounts </button>
    </main>
</template>


<script setup>
import { $fetch } from "ofetch";

function getAccounts() {
    $fetch("/.netlify/functions/getAccounts")
        .then(res => console.log(res))
        .catch(function(error) {
            console.log(error);
        });
}
</script> -->

<script setup>
//Test Change
import {ref} from "vue";
import { useSupabaseClient } from "~~/.nuxt/imports";

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithOtp({ email: email.value });
        if (error) throw error;
        alert("Check your email for the login link!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Nuxt 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>