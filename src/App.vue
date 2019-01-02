<template>
    <div id="app">
        <router-view class="content-body"></router-view>
    </div>
</template>

<script>
    import './css/common.css'

    export default {
        name: 'app',
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
