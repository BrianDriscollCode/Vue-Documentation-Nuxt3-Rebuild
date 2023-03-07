<template>
    <h1> Login </h1>
    <label> Email </label>
    <input v-model="email"/>
    <label> Password </label>
    <input v-model="passcode" type="password"/>
    <button @click="login"> Login </button>
	<button @click="signOut"> Sign out </button>
</template>

<script setup>
import { useSupabaseAuthClient } from "~~/.nuxt/imports";
import { ref } from "vue";
const client = useSupabaseAuthClient();
let email = ref("");
let passcode = ref("");


const login = async () => {
    const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: passcode.value
    });

    if (error) {
        console.log(error);
        return alert("Something went wrong");
    }

    console.log(data, "Login Success");
};

async function signOut() {
    const { error } = await client.auth.signOut();

    if (error) {
        return alert("Something went wrong");
    }

    console.log("Signout success");
}

</script>