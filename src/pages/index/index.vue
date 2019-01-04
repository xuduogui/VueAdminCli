<template>
    <div>
        <el-container class="layout-container">
            <el-aside width="" :style="navLeftStyle">
                <layout-nav-left></layout-nav-left>
            </el-aside>
            <el-container style="min-width: 800px;">
                <el-header :style="navHeadStyle">
                    <layout-nav-head></layout-nav-head>
                </el-header>
                <el-main>
                    <layout-nav-body></layout-nav-body>
                </el-main>
                <el-footer>
                    <layout-nav-footer></layout-nav-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import LayoutNavLeft from "@/components/layout/layoutNavLeft";
    import LayoutNavHead from "../../components/layout/layoutNavHead";
    import LayoutNavBody from "../../components/layout/layoutNavBody";
    import LayoutNavFooter from "../../components/layout/layoutNavFooter";

    export default {
        name: "index",
        data () {
            return {
                navLeftStyle: {
                    backgroundColor: this.$store.state.layoutStore.navLeftBackgroundColor,
                    overflow: "hidden"
                },
                navHeadStyle: {
                    backgroundColor: this.$store.state.layoutStore.navHeadBackgroundColor,
                }
            }
        },
        computed: {
            ...mapState ({
                // backgroundColor: state => state.layoutStore.navLeftBackgroundColor,
            }),
        },
        components: {LayoutNavFooter, LayoutNavBody, LayoutNavHead, LayoutNavLeft},
    }
</script>

<style scoped>
    .layout-container {
        width: 100%;
        height: 100%;
    }
</style>
