<template>
    <div>
        <div style="display: inline-block; width: 200px; margin-right: 20px;">
            <el-input
                    v-model="bodySearchValue"
                    placeholder="请输入内容"
            ></el-input>
        </div>
        <el-button type="primary" icon="el-icon-search" @click="$emit('getSearchData', bodySearchValue)">搜索</el-button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "bodySearch",
        data () {
            return {
                bodySearchValue: ''
            }
        },
    }
</script>

<style scoped>

</style>
