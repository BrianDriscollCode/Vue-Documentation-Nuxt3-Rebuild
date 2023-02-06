<template>
	<div class="returnContainer">
		<h3> Search </h3>
		<ul>
			<li :v-for="item in contentObject"> {{ item }} </li>
		</ul>
	</div>
</template>

<script>
export default {
    name: "searchModal",
    data() {
        return {

        };
    },
    props: {
        contentObject: Object
    }
};
</script>

<style scoped>

.returnContainer {
	height: 500px;
	width: 500px;
	position: absolute;
	margin: auto;
	vertical-align: center;
	background-color: blue;
}

</style>