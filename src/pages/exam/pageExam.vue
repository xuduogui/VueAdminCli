<template>
    <div>
        <body-search>
            <page-exam-search @getSearchData="getSearchDataFun"></page-exam-search>
        </body-search>
        <body-table>
            <page-exam-table ref="table"></page-exam-table>
        </body-table>
    </div>
</template>

<script>
    import BodySearch from "../../components/bodyItem/bodySearch";
    import BodyTable from "../../components/bodyItem/bodyTable";
    import BodyBreadcrumb from "../../components/bodyItem/bodyBreadcrumb";
    import PageExamTable from "./pageExamTable";
    import PageExamSearch from "./pageExamSearch";

    export default {
        name: "pageExam",
        data() {
            return {
                searchData: {}
            }
        },
        mounted() {

        },
        methods: {
            getSearchDataFun(data) {
                this.searchData = data
            },
            uploadTableBySearch() {
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
        components: {PageExamSearch, PageExamTable, BodyBreadcrumb, BodyTable, BodySearch},
    }
</script>

<style scoped>

</style>
