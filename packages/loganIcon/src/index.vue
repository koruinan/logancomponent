<template>
  <div class="container">
    <div
      class="item"
      v-for="(item, index) in Object.keys(Icons)"
      :key="index"
      @click="clickItem(item)"
    >
      <div class="text">
        <component :is="`logan-icon-${toline(item)}`"></component>
      </div>
      <div class="icon">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as Icons from "@element-plus/icons-vue";
import { toline } from "../../utils";
import { useCopy } from "../../hooks/useCopy";

let clickItem = (item: string) => {
  let text = `<logan-icon-${toline(item)} />`;
  useCopy(text);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  min-width: 600px;
  max-width: 1200px;
}

.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  cursor: pointer;
  height: 120px;
  border: 1px solid #efefef;
  box-sizing: border-box;
}

.text {
  font-size: 14px;
}

// .icon {
//   flex: 1;
// }

svg {
  width: 2em;
  height: 2em;
}
</style>
