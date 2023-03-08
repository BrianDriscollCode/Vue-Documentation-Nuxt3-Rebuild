<template>
    <h1> Sign Up </h1>
    <label> First Name </label>
    <input v-model="firstName">
    <label> Email </label>
    <input v-model="email"/>
    <label> Password </label>
    <input v-model="passcode" type="password"/>
    <button @click="login"> Sign up </button>
</template>

<script setup>
import { useSupabaseAuthClient } from "~~/.nuxt/imports";
import { ref } from "vue";
const client = useSupabaseAuthClient();
let email = ref("");
let passcode = ref("");
let firstName = ref("");


const login = async () => {
    const { data, error } = await client.auth.signUp({
        email: email.value,
        password: passcode.value,
        is_super_admin: true,
        options: {
            data: {
                first_name: firstName.value,
                account_type: "basic"
            }
        }
    });

    if (error) {
        console.log(error);
        return alert("Something went wrong");
    }

    console.log(data, "Login Success");
};
</script>