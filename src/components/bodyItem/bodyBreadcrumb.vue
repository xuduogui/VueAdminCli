<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px;">
            <el-breadcrumb-item
                    v-for="(item, index) in breadcrumbs"
                    :key="index"
                    :to="{ path: item.path }">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "bodyBreadcrumb",
        props: {
            breadcrumbs: Array
        }
    }
</script>

<style scoped>

</style>
