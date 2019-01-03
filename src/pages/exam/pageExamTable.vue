<template>
    <div>
        <el-table
                :data="tableData2"
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import pageExamApi from '../../api/pageExam.js'
    export default {
        name: "pageExamTable",
        data() {
            return {
                tableData2: [],
                currentPage: 4,
                pageSize: 100,
                total: 400
            }
        },
        mounted() {
            this.initTable()
        },

        methods: {
            async initTable (config = {
                page: this.currentPage,
                limit: this.pageSize
            }) {
                let result = await Promise.all(
                    [
                        pageExamApi.getTableData(config),
                    ]
                )
                // 测试代码
                this.tableData2 = []
                this.total = 0
                setTimeout(() => {
                    this.tableData2 = result[0].data.data
                    this.total = result[0].data.count
                }, 1000)
                // 测试代码结束
            },

            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },

            handleSizeChange(val) {
                this.pageSize = val
                this.initTable()
            },
            handleCurrentChange(val) {
                this.currentPage = val
                this.initTable()
            }
        },
    }
</script>

<style scoped>

</style>
