<template>
    <div class="formContainer">
        <h1> Get Course Access Today! </h1>
        <div class="inputContainer">
            <div>
                <label> First Name </label>
                <span class="validationTextInvisible"> Test </span>
            </div>
            <input v-model="firstName" />
        </div>
        <div class="inputContainer">
            <div>
                <label> Email </label>
                <span class="validationTextInvisible"> Test </span>
            </div>
            <input v-model="email"/>
        </div>
        <div class="inputContainer">
            <div>
                <label> Password </label>
                <span class="validationTextInvisible"> Test </span>
            </div>
            <input v-model="passcode" type="password"/>
        </div>
        <p class="termsDescription"> By signing up you are agreeing to our <NuxtLink to="/terms" class="homeLink"> terms and service </NuxtLink> </p>
        <button @click="createAccount"> Start Learning Now! </button>
    </div>
</template>

<script setup>
import { useSupabaseAuthClient } from "~~/.nuxt/imports";
import { ref, reactive } from "vue";
import { $fetch } from "ofetch";
import { navigateTo } from "~~/.nuxt/imports";

const client = useSupabaseAuthClient();
let email = ref("");
let passcode = ref("");
let firstName = ref("");
let mailerLiteData = ref("");

const componentState = reactive({
    authAccount: false,
    mailerAccount: false
});


const createAccount = async () => {
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

    let tempData;

    mailerLiteData.value = await $fetch("/api/createAccount", {
        method: "post",
        body: {
            name: firstName.value,
            email: email.value
        }
    })
        .then(response => {
            let status = response;
            tempData = JSON.parse(status.body);
            componentState.mailerAccount = true;
        });

    console.log(data, "Login Success");
    console.log(tempData, "Email Subscription Success");

    if (data)
    {
        componentState.authAccount = true;
    }

    if (tempData)
    {
        componentState.mailerAccount = true;
    }

    if (componentState.authAccount && componentState.mailerAccount)
    {
        navigateTo("/");
    }
};


</script>

<style scoped>
.formContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #34445c;
    width: 500px;
    text-align: center;
    margin: 0 auto 0 auto;
    padding: 2em;
    border-radius: 10px;
    color: white;
}

h1 {
    margin-top: 0;
}

label {
    padding-bottom: 0.5em;
}

.validationTextInvisible {
    margin-top: 0;
    opacity: 0;
}

.validationTextShow {
    margin-top: 0;
    opacity: 1;
    color: rgb(255, 0, 0);
}

input {
    height: 2.3em;
    border-radius: 5px;
    font-size: 1.3em;
    padding-top: 0;
    padding-bottom: 0;
    text-indent: 1em;
}

.inputContainer {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    text-align: left;
}

p {
    margin-top: 0em;
}

button {
    width: 100%;
    height: 4em;
    margin-top: 1em;
    background: rgb(0,198,154);
    background: linear-gradient(180deg, rgba(0,198,154,1) 0%, rgba(0,198,154,1) 65%, rgba(0,167,129,1) 100%);
    color: rgb(55, 55, 55);
    font-weight: 600;
    border: none;
    border-radius: 5px;
    -webkit-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
    -moz-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
    box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
    transition: background-color .2s;
    margin-bottom: 1em;
}

button:hover {
    background: rgb(136, 255, 229);
    background: linear-gradient(180deg, rgb(112, 255, 224) 0%, rgb(101, 251, 218) 65%, rgb(106, 200, 178) 100%);
}

.homeLink {
    margin-top: 1em;
    color: rgb(220, 220, 255);
    text-decoration: none;
}

.homeLink:hover {
    color: rgb(0, 255, 157);
}
</style>
