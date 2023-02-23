<template>
	<section>
		<div class="email_form">
			<h3> Get notified when our free course releases!</h3>
			<div>
                <label> First Name </label>
                <input v-model="user_data.name" />
                <label> Email </label>
                <input v-model="user_data.email" />
				<p> You information will not be shared. You will only be emailed updates on the course. </p>
                <button @click="sendEmail"> Get Notified </button>
				<button @click="testText"> TEST </button>
			</div>
		</div>
	</section>
</template>

<script setup>
import  { reactive } from "vue";

let user_data = reactive({
    name: "",
    email: ""
});

function sendEmail() {
    $fetch(`/.netlify/functions/collectEmailSubscribers?name=${user_data.name}&email=${user_data.email}`); // eslint-disable-line
}

function testText() {
    console.log(user_data.email, " ", user_data.name);
}
</script>