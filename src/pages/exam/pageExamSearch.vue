<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-input v-model="input.one" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input v-model="input.two" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input v-model="input.three" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input v-model="input.four" placeholder="请输入内容"></el-input>
            </el-col>

            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" @click="$emit('getSearchData', input)">搜索</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "pageExamSearch",
        data () {
            return {
                input: {
                    one: '',
                    two: '',
                    three: '',
                    four: '',
                }
            }
        }
    }
</script>

<style scoped>

</style>
