<template>
    <div>
        <body-breadcrumb></body-breadcrumb>
        <router-view></router-view>
    </div>
</template>

<script>
    import BodyBreadcrumb from "../bodyItem/bodyBreadcrumb";
    export default {
        name: "layoutNavBody",
        components: {BodyBreadcrumb},
    }
</script>

<style scoped>

</style>
