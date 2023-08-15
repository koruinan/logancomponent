<template>
  <el-dialog
    v-model="dialogvisible"
    title="弹窗"
    v-bind="$attrs"
  >
    <logan-form
      ref="form"
      :options="options"
      @on-change="onChange"
      @before-upload="beforeUpload"
      @on-preview="onPreview"
      @on-remove="onRemove"
      @before-remove="beforeRemove"
      @on-success="onSuccess"
      @on-exceed="onExceed"
      :http-request="httpRequest"
      :label-width="labelWidth"
    >
      <template #uploadarea>
        <slot name="uploadarea"></slot>
      </template>
      <template #uploadtip>
        <slot name="uploadtip"></slot>
      </template>
    </logan-form>
    <template #footer>
      <slot
        name="footer"
        :formref="form"
      ></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, PropType } from "vue";
import { FormInstance, FormOptions } from "../../loganForm/src/types/types";
let form = ref<FormInstance | null>();

let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  isScroll: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
  },
  beforeUpload: {
    type: Function,
  },
  onPreview: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
  httpRequest: {
    type: Function,
  },
  labelWidth: {
    type: String,
    default: "100px",
  },
});
let emits = defineEmits(["update:visible"]);
let dialogvisible = ref(props.visible);
watch(
  () => props.visible,
  (val) => {
    dialogvisible.value = val;
  }
);

watch(
  () => dialogvisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<style lang="scss" scoped></style>
