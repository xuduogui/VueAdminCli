<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px;">
            <el-breadcrumb-item
                    v-for="(item, index) in breadcrumbs"
                    :key="index">
                <a href="#" @click="changeBreadcrumb(index)">
                    {{ item.name }}
                </a>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "bodyBreadcrumb",
        computed: {
            // ...mapState({
            //     breadcrumbs: state => state.layoutStore.navBodyBreadcrumbs,
            // })
            breadcrumbs () {
                return this.$store.state.bodyContentStore.navBodyBreadcrumbs
            }
        },
        methods: {
            changeBreadcrumb (index) {
                // let arr = this.$store.state.layoutStore.navBodyBreadcrumbs
                // arr.length = index + 1
                this.$store.commit('bodyContentStore/setNavBodyBreadcrumbsByLength', index + 1)
            }
        },

    }
</script>

<style scoped>

</style>
