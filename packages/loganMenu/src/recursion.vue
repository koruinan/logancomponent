<template>
  <template
    v-for="(item, i) in data"
    :key="i"
  >
    <el-menu-item
      :index="item[index]"
      v-if="!item[children] || !item[children].length"
    >
      <el-icon>
        <component
          v-if="item[icon]"
          :is="`logan-icon-${toline(item[icon])}`"
        ></component>
      </el-icon>
      <template #title>
        <span>{{ item[name] }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu
      v-if="item[children] && item[children].length"
      :index="item[index]"
    >
      <template #title>
        <el-icon>
          <component
            v-if="item[icon]"
            :is="`logan-icon-${toline(item[icon])}`"
          ></component>
        </el-icon>
        <span>{{ item[name] }}</span>
      </template>
      <recursion
        :data="item[children]"
        :name="name"
        :index="index"
        :icon="icon"
        :children="children"
      >
      </recursion>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { toline } from "../../utils";
import { PropType } from "vue";
import recursion from "./recursion.vue";
let props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
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

<style lang="scss" scoped></style>
