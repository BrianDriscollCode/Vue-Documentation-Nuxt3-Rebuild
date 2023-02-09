<template>
	<div class="returnContainer">
		<h3> Search </h3>
		<input value="test" ref="input"/>
		<ul class="searchList">
			<!-- <li :v-for="item in pages" :key="item.title">{{ item.title }}</li> -->
			<!-- <li :v-for="item in pages"> {{ item }} </li> -->
			<!-- <li v-for="(item, index) in this.tempArray" :key="index">
                {{ item.header }}
            </li> -->
			<li
                v-for="(item, index) in this.currentSearchArray"
				:key="index"
                class="searchButton"
			>
                <nuxt-link :to="item.path" class="searchButtonLinkStyling">
                    <div class="searchButtonContent">
                        <span> {{ item.header }} </span>
                        <span> {{ item.page }} - Page </span>
                    </div>
                </nuxt-link>
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
            searchInput: ""
        };
    },
    props: {
        headers: Object,
    },
    methods: {
        showContent() {
            console.log(this.headers);
            console.log(this.currentSearchArray);
        }
    },
    computed: {
        currentSearchArray: function() {
            let tempArray = [];
            for (let i = 0; i < 10; i += 2) {
                tempArray.push(this.headers[i]);
            }

            return tempArray;
        }
    }
};
</script>

<style scoped>

.returnContainer {
	height: 500px;
	width: 500px;
	padding: 2em;
	position: absolute;
	margin: auto;
	vertical-align: center;
	border-radius: 25px;
	background-color: rgb(248, 248, 255);
	-webkit-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    -moz-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
}
.searchList {
     padding-left: 0;
}

.searchButton {
	background: rgb(173, 189, 218);
	-webkit-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    -moz-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    list-style-type: none;
	border-radius: 5px;
	margin-bottom: 0.8em;
}

.searchButton:hover {
    background: rgb(132, 191, 233);
}

.searchButtonLinkStyling {
	color: rgb(40, 40, 40);
    text-decoration: none;
	margin: 1em 0 1em 0;
}
.searchButtonContent {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 1.2em;
	padding-right: 1.2em;
}

</style>