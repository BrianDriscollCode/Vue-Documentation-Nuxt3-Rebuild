<template>
	<section>
		<div class="email_form">
			<h3> Get on the waitlist to try our course first! </h3>
			<div>
                <label> First Name </label>
                <input v-model="user_data.name" />
                <label> Email </label>
                <input v-model="user_data.email" />
				<div class="validationWarnings">
					<p v-if="validation.namelength === false && initialSubmit === true"> First name must be at least 2 characters </p>
                    <p v-if="validation.nameNoSpace === false && initialSubmit === true"> Only first name, no spaces </p>
					<p v-if="validation.emailContainsAT === false && initialSubmit === true"> Email must contain an @ symbol </p>
				</div>
				<p> You information will not be shared. You will only be emailed updates on the course. </p>
                <button @click="submitEmail"> Join Waitlist! </button>
			</div>
		</div>
	</section>
</template>

<script setup>
import  { reactive, ref } from "vue";

let submitGranted = ref(false);
let initialSubmit = ref(false);

let user_data = reactive({
    name: "",
    email: ""
});

let validation = reactive({
    namelength: false,
    nameNoSpace: false,
    nameNoInput: false,
    emailContainsAT: false,
    emailNoInput: false
});

function submitEmail() {
    validateForm();
    console.log("submitEmailRan");

    if (submitGranted.value) {
        $fetch(`/.netlify/functions/collectEmailSubscribers?name=${user_data.name}&email=${user_data.email}`); // eslint-disable-line
    }
}

function validateForm() {


    //Test name length *minimum 2
    if (user_data.name.length >= 2)
    {
        validation.namelength = true;
    }
    else
    {
        initialSubmit.value = true;
        return;
    }



    //Test if has spaces *must have no spaces
    let spaceRegex = /\s/;
    if (!spaceRegex.test(user_data.name))
    {
        validation.nameNoSpace = true;
    }
    else
    {
        initialSubmit.value = true;
        return;
    }

    //test for @ symbol in email
    let atSignRegex = /@/;
    if (atSignRegex.test(user_data.email)) {
        validation.emailContainsAT = true;
    }
    else
    {
        initialSubmit.value = true;
        return;
    }

    console.log(validation.namelength, validation.nameNoSpace, validation.emailContainsAT);

    if
    (
        validation.namelength === true,
        validation.nameNoSpace === true,
        validation.emailContainsAT === true
    )
    {
        submitGranted.value = true;
        return;
    }
    else
    {
        submitGranted.value = false;
        return;
    }

}
</script>

<style scoped>
.validationWarnings {
	color: red;
}

</style>