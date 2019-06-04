
<template>
  <el-container style="width: 100%; height: 100%;">
    <!-- 头部 -->
    <el-header style="overflow: hidden;">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <!-- 头部左侧 -->
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
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
            <el-menu-item index="4">
              <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
          </el-menu>
        </el-col>
        
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="">
        <!-- 左侧栏 -->
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
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
      </el-aside>
      <!-- 内容栏 -->
      <el-container>
        <el-main>
          <!-- 标签页 -->
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              :key="index"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
            >
              <router-view/>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import mixinAside from "./mixins/mixinAside.js";
import mixinHeader from "./mixins/mixinHeader.js";
import mixinTitle from "./mixins/mixinTitle.js";
import mixinContent from "./mixins/mixinContent";
export default {
  name: "ViewIndex",
  mixins: [mixinAside, mixinHeader, mixinTitle, mixinContent],
  mounted() {}
};
</script>

<style>
</style>
