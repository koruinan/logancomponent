<template>
  <el-menu
    :default-active="defaultactive"
    :router="router"
    class="el-menu-vertical-demo"
  >
    <recursion
      :data="data"
      :name="name"
      :index="index"
      :icon="icon"
      :children="children"
    ></recursion>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import recursion from "./recursion.vue";
let props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  defaultactive: {
    type: String,
    default: "",
  },
  router: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "name",
  },
  index: {
    type: String,
    default: "index",
  },
  icon: {
    type: String,
    default: "icon",
  },
  children: {
    type: String,
    default: "children",
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px; //宽度自己掌握
  height: 100%;
}
</style>
