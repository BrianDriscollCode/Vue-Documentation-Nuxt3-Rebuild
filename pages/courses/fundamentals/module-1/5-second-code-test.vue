<template>
	<h1> test </h1>
	{{ webcontainerInstance }}
</template>

<script setup>
import { WebContainer } from "@webcontainer/api";

const webcontainerInstance = await WebContainer.boot();

</script>