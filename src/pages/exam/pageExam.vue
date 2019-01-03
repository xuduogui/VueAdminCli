<template>
    <div>
        <body-breadcrumb :breadcrumbs="breadcrumbs"></body-breadcrumb>
        <body-search @getSearchData="getSearchDataFun">
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </body-search>
        <body-table>
            <page-exam-table ref="table"></page-exam-table>
        </body-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BodySearch from "../../components/bodyItem/bodySearch";
    import BodyTable from "../../components/bodyItem/bodyTable";
    import BodyBreadcrumb from "../../components/bodyItem/bodyBreadcrumb";
    import PageExamTable from "./pageExamTable";
    export default {
        name: "pageExam",
        data () {
            return {
                searchData: ''
            }
        },
        computed: {
            ...mapState({
                breadcrumbs: state => state.pageExamStroe.navBreadcrumbs,
            })
        },
        mounted () {

        },
        methods: {
            getSearchDataFun(data) {
                this.searchData = data
            },
            uploadTableBySearch () {
                const child = this.$refs['table']
                child.initTable({
                    page: child.currentPage,
                    limit: child.pageSize,
                    value: this.searchData
                })
            }
        },
        watch: {
            searchData: function () {
                this.uploadTableBySearch()
            }
        },
        components: {PageExamTable, BodyBreadcrumb, BodyTable, BodySearch},
    }
</script>

<style scoped>

</style>
