<template>
  <div>
    <Search />
    <Banner />
    <Options />

    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Search from "@/components/Search.vue";
import Banner from "@/components/Banner.vue";
import Options from "@/components/Options.vue";
</script>

<style lang="scss" scoped></style>
