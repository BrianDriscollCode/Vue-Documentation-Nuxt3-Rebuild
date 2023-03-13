<template>
	<div class="formContainer">
        <h1> Get Course Access Today! </h1>
		<div class="inputContainer">
			<label> First Name </label>
            <input v-model="firstName" />
		</div>
		<div class="inputContainer">
			<label> Email </label>
            <input v-model="email"/>
		</div>
		<div class="inputContainer">
			<label> Password </label>
            <input v-model="passcode" type="password"/>
		</div>
		<p> By signing up you are agreeing our terms and service </p>
		<button @click="login"> Start Learning Now! </button>
	</div>
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
	margin-top: 0;
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
</style>