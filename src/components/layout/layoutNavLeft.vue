<template>
    <div>
        <div style="height: 61px;">
            <!--测试-->
        </div>
        <el-menu
                :default-active="curSelected"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                :collapse="isCollapse"
                :background-color="backgroundColor"
                :text-color="textColor"
                :active-text-color="activeTextColor"
                :style="{ border: backgroundColor }"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "navLeft",
        data() {
            return {
                // isCollapse: false
            };
        },
        computed: {
            ...mapState({
                curSelected: state => state.layoutStore.navLeftSelected,
                backgroundColor: state => state.layoutStore.navLeftBackgroundColor,
                textColor: state => state.layoutStore.navLeftTextColor,
                activeTextColor: state => state.layoutStore.navLeftActiveTextColor,
                isCollapse: state => state.layoutStore.navLeftIsCollapse
            })
        },
        mounted () {
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleSelect(index) {
                this.sendChose(index)
            },
            sendChose(index) {
                this.$store.commit('layoutStore/setNavLeftSelected', index)
            },
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
