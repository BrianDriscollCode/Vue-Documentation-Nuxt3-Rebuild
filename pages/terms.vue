<template>
	<NavBar class="navbar"/>
	<section class="terms">
        <NuxtLink to="/register"> Back to sign up... </NuxtLink>

		<h1> Terms and Services for VueReference LLC </h1>

		<h2> Introduction </h2>
		<p>  Welcome to VueReference, an online education platform that offers a variety of courses to users. By accessing and using our website, you agree to be bound by the following terms and conditions. Please read these terms carefully before using our platform. </p>

		<h2> User Accounts</h2>
		<p> To access our courses, you must create an account on our platform. When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account information, including your password. You agree to notify us immediately if you suspect any unauthorized use of your account. </p>

		<h2> Payment and Billing </h2>
		<p> We offer various pricing plans for our courses. By subscribing to a pricing plan, you agree to pay the fees associated with that plan. We reserve the right to change our pricing plans and fees at any time (your current subscriptions will not change, only for those who purchase after the changes), but we will provide notice to you in advance of any changes. We allow a refund guarantee of 14 days after the purchase but we cannot guarantee refunds after 14 days.  </p>

		<h2> Course Content </h2>
		<p> Our courses are offered in a variety of formats, including pre-recorded videos, live webinars, and written materials. We reserve the right to modify or remove any course content at any time. Course instructors retain all intellectual property rights to their course content. You may not copy, distribute, or sell any course content without the prior written consent of the course instructor. </p>

		<h2> Privacy Policy </h2>
		<p> We collect and use personal information in accordance with our privacy policy, which is available on our website. By using our platform, you agree to our privacy policy. </p>

		<h2> Intellectual Property </h2>
		<p> We and our course instructors retain all intellectual property rights to the content on our platform. You may not copy, distribute, or sell any content without the prior written consent of the content owner. </p>

		<h2> Termination </h2>
		<p> We reserve the right to terminate your account at any time for any reason, including if we suspect that you have violated our terms and conditions. Upon termination, you will no longer have access to our courses. </p>

		<h2> Dispute Resolution </h2>
		<p> Any disputes arising out of or related to your use of our platform shall be resolved through arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in [City and State], and the arbitrator's decision shall be final and binding. </p>

		<h2> Amendments </h2>
		<p> We reserve the right to amend these terms and conditions at any time. We will provide notice to you of any material changes to these terms and conditions. Your continued use of our platform after the effective date of any changes to these terms and conditions constitutes your acceptance of the changes.</p>

		<h2> Governing Law </h2>
		<p> These terms and conditions shall be governed by and construed in accordance with the laws of the State of Arizona, without giving effect to any principles of conflicts of law. </p>
	</section>
    <Footer />
</template>

<script setup>
import NavBar from "@/components/main-pages/navbar.vue";
import Footer from "@/components/main-pages/footer.vue";
</script>

<style scoped>
.navbar {
	background-color: #34445c;
}

.terms {
	width: 70%;
	margin: 1em auto 1em auto;
}
</style>