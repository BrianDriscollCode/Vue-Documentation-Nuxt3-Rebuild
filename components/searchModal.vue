<template>
	<div class="returnContainer">
		<h3> Search </h3>
		<p> {{ searchInput }} </p>
		<ul>
			<!-- <li :v-for="item in pages" :key="item.title">{{ item.title }}</li> -->
			<!-- <li :v-for="item in pages"> {{ item }} </li> -->
			<li v-for="(item, index) in this.headers" :key="index">
                {{ item.header }}
            </li>
		</ul>
		<button @click="showContent"> show content </button>
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
        headers: Object,
        searchInput: String
    },
    methods: {
        showContent() {
            console.log(this.headers);
        }
    },
    computed: {
        // currentSearchArray: function() {

        // }
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