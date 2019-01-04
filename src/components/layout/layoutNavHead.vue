<template>
    <div>
        <el-row>
            <el-col :span="16">
                <el-menu
                        :default-active="curSelected"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        :background-color="backgroundColor"
                        :text-color="textColor"
                        :active-text-color="activeTextColor">
                    <el-menu-item index="0"><i class="el-icon-menu"></i></el-menu-item>
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="8">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        :background-color="backgroundColor"
                        :text-color="textColor"
                        :active-text-color="activeTextColor">
                    <el-menu-item index="3" class="el-submenu-right">
                        退出
                    </el-menu-item>
                    <el-submenu index="2" class="el-submenu-right">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            系统设置
                        </template>
                        <el-menu-item index="2-1">修改信息</el-menu-item>
                        <el-menu-item index="2-2">注销</el-menu-item>
                        <el-menu-item index="2-3">切换</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "layoutNavHead",
        data() {
            return {
                activeIndex: '1',

            };
        },
        computed: {
            ...mapState({
                curSelected: state => state.layoutStore.navHeadSelected,
                backgroundColor: state => state.layoutStore.navHeadBackgroundColor,
                textColor: state => state.layoutStore.navHeadTextColor,
                activeTextColor: state => state.layoutStore.navHeadActiveTextColor,
            })
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
                if (key === '0') {
                    this.$store.commit('layoutStore/switchNavLeftIsCollapse')
                }
            }
        }
    }
</script>

<style scoped>
    .el-submenu-right {
        float: right !important;
    }
</style>
