<template>
    <section class="loginContainer">
        <h2> Registered Users </h2>
        <hr class="line" />
        <p class="description"> {{ user ? signOutText: loginText }}</p>
        <div :class="user ? 'inputWrapperInvisible': 'inputWrapper'">
            <label> Email </label>
            <input v-model="email" class="input"/>
        </div>
        <div :class="user ? 'inputWrapperInvisible': 'inputWrapper'">
            <label> Password </label>
            <input v-model="passcode" type="password" class="input"/>
        </div>
        <div class="buttonWrapper">
            <button @click="currentFunction"> {{ user ? "Sign out": "Login"}} </button>
        </div>
    </section>
</template>

<script setup>
import { useSupabaseAuthClient, useSupabaseUser } from "~~/.nuxt/imports";
import { ref, computed } from "vue";
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
let email = ref("");
let passcode = ref("");
let loginText = "Enter in your account information";
let signOutText = "You are logged in and have access!";


const login = async () => {
    console.log("Run login");
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
    console.log("Run signout");
    const { error } = await client.auth.signOut();

    if (error) {
        return alert("Something went wrong");
    }

    console.log("Signout success");
}

let currentFunction = computed(() => {
    if (user.value)
    {
        return signOut;
    }
    else
    {
        return login;
    }
});
</script>

<style scoped>
.loginContainer {
    display: flex;
    flex-direction: column;
}

.line {
    background-color: #34445c;
    width: 100%;
}

.input {
    width: 70%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #a0a0a0;
    padding-left: 15px;
    font-size: 18px;
}

.inputWrapper {
    padding-top: 1.5em;
    display:flex;
    flex-direction: column;
}

.inputWrapperInvisible {
    display: none;
}

.buttonWrapper {
    padding-top: 1.5em;
}

button {
    background: linear-gradient(180deg, rgba(0,198,154,1) 0%, rgba(0,198,154,1) 65%, rgba(0,167,129,1) 100%);
    color: rgb(55, 55, 55);
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 0.8em;
    box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
    transition: background-color .2s;
}
</style>