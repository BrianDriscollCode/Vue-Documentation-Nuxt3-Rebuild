<template>
    <section>
        <div class="successResponse" v-if="componentState.success">
            <h3> You have been added to the waitlist! </h3>
        </div>
        <div class="email_form" v-if="componentState.form">
            <h3> Get on the waitlist to try our course first! </h3>
            <div>
                <label> First Name </label>
                <input v-model="user_data.name" />
                <label> Email </label>
                <input v-model="user_data.email" />
                <div class="validationWarnings">
                    <p v-if="errorNumber === 1"> First name must be at least 2 characters </p>
                    <p v-if="errorNumber === 2"> Only first name, no spaces </p>
                    <p v-if="errorNumber === 3"> Email must contain an @ symbol </p>
                    <p v-if="errorNumber === 4"> Email must contain a .com, .org, etc </p>
                    <p v-if="errorNumber === 5"> No more submits can be done at this time </p>
                    <p v-if="componentState.failure === true"> Email does not exist </p>
                </div>
                <p> You information will not be shared. You will only be emailed updates on the course. </p>
                <button @click="submitEmail"> Join Waitlist! </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import  { reactive, ref } from "vue";
import { $fetch } from "ofetch";

let submitGranted = ref(false);

let componentState = reactive({
    form: true,
    failure: false,
    success: false
});

let user_data = reactive({
    name: "",
    email: ""
});

let validation = reactive({
    namelength: false,
    nameNoSpace: false,
    emailContainsAT: false,
    emailContainsPERIOD: false
});

let errorNumber = ref(0);
let totalSubmit = ref(0);
let stopFutureSubmit = ref(false);
let data = ref();

async function submitEmail() {
    //Trip spaces at start and end
    trimData();

    //Validate inputs to be correct EXCEPT email existence
    validateForm();

    //Block repeated submissions
    if (stopFutureSubmit.value) {
        console.log("Email submission blocked");
        errorNumber.value = 5;
    }

    //Post email to email list and get a response
    if (submitGranted.value && !stopFutureSubmit.value) {
        // Only allow 3 submits before blocking
        totalSubmit.value += 1;

        data.value = await $fetch(`/.netlify/functions/collectEmailSubscribers?name=${user_data.name}&email=${user_data.email}`)
            .then(response => {
                //Check if submit failed

                let status = JSON.parse(response);
                if (status.status == "failure" && totalSubmit.value < 2) {
                    stopFutureSubmit.value = false;
                    componentState.failure = true;
                }
                //Check if user passes 3 submits
                else if (status.status == "failure" && totalSubmit.value >= 2) {
                    stopFutureSubmit.value = true;
                    componentState.failure = true;
                }
                //Submit is successful, trigger success state
                else {
                    componentState.success = true;
                    componentState.failure = false;
                    componentState.form = false;
                    stopFutureSubmit.value = true;
                }
            })
            .catch(function(error) {
                console.log(error, " -error", error.response);
            });

        console.log("Email submit attempted");
    }
}


function trimData() {
    user_data.name = user_data.name.trim();
    user_data.email = user_data.email.trim();
}

function validateForm() {


    //Test name length *minimum 2
    if (user_data.name.length >= 2)
    {
        validation.namelength = true;
    }
    else
    {
        errorNumber.value = 1;
        validation.namelength = false;
        return;
    }


    //Test if has spaces in between *must have no spaces
    let spaceRegex = /\s/;
    if (!spaceRegex.test(user_data.name))
    {
        validation.nameNoSpace = true;
    }
    else
    {
        errorNumber.value = 2;
        validation.nameNoSpace = false;
        return;
    }

    //test for @ symbol in email
    let atSignRegex = /@/;
    if (atSignRegex.test(user_data.email)) {
        validation.emailContainsAT = true;
    }
    else
    {
        errorNumber.value = 3;
        validation.emailContainsAT = false;
        return;
    }

    //Text for . symbol in email
    let periodSignRegex = /\./;
    if (periodSignRegex.test(user_data.email)) {
        validation.emailContainsPERIOD = true;
    }
    else
    {
        errorNumber.value = 4;
        validation.emailContainsPERIOD = false;
        return;
    }

    //check if all requirements are met before submission
    if
    (
        validation.namelength === true,
        validation.nameNoSpace === true,
        validation.emailContainsAT === true,
        validation.emailContainsPERIOD === true
    )
    {
        errorNumber.value = 0;
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

.successResponse {
    color: green;
}

</style>