<template>
    <div id="app">
        <index class="content-body"></index>
    </div>
</template>

<script>
    import './css/common.css'
    import Index from "./pages/index/index";

    export default {
        name: 'app',
        components: {Index},
    }
</script>

<style>
    html, body, #app, .content-body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>
