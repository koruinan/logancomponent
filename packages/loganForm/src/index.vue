<template>
  <el-form
    v-if="model"
    :model="model"
    :rules="rules"
    :validate-on-rule-change="false"
    ref="form"
  >
    <template
      v-for="(item, index) in options"
      :key="index"
    >
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-if="!item.children! || !item.children!.length"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          v-bind="item.attrs"
        ></component>
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
        >
          <slot name="uploadarea"></slot>
          <template #tip>
            <slot name="uploadtip"></slot>
          </template>
        </el-upload>
        <div
          style="border: 1px solid #ccc"
          v-if="item.type === 'editor'"
        >
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
          />
          <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
            @onChange="handleChange"
          />
        </div>
      </el-form-item>
      <el-form-item
        :label="item.label"
        :prop="item.prop"
        v-if="item.children && item.children.length"
      >
        <component
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
          v-bind="item.attrs"
          :placeholder="item.placeholder"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action"> </slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import {
  PropType,
  ref,
  onMounted,
  watch,
  shallowRef,
  onBeforeUnmount,
} from "vue";
import { FormOptions, FormInstance } from "./types/types";
// import { Toolbar, Editor } from "@wangeditor/editor-for-vue";
import { IEditorConfig } from "@wangeditor/editor";
import { IToolbarConfig } from "@wangeditor/editor";
import cloneDeep from "lodash/cloneDeep";
let model = ref<any>(null);
let rules = ref<any>(null);
let form = ref<FormInstance | null>();
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  httpRequest: {
    type: Function,
  },
});

const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");
let toolbarConfig: Partial<IToolbarConfig> = {};
let editorConfig: Partial<IEditorConfig> = {};
const mode = ref("default");
const editorItem = ref();

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "on-exceed",
  "before-upload",
  "before-remove",
  "auto-upload",
]);
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
      if (item.type === "editor") {
        editorConfig.placeholder = item.placeholder!;
        editorConfig = item.editorConfig!;
        toolbarConfig = item.toolbarConfig!;
        mode.value = item.mode!;
        valueHtml.value = item.value!;
        editorItem.value = item;
      }
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};
const handleChange = (editor: any) => {
  if (editor.isEmpty()) {
    model.value[editorItem.value.prop!] = "";
    return;
  }
  model.value[editorItem.value.prop!] = editor.getHtml();
};
let resetFields = () => {
  form.value!.resetFields();
  if (editorRef.value) {
    editorRef.value.setHtml(editorItem.value.value);
  }
};
let validate = () => {
  return form.value!.validate;
};
let getFormDate = () => {
  return model.value;
};
defineExpose({
  resetFields,
  validate,
  getFormDate,
});
onMounted(() => {
  initForm();
});
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);
let onPreview = (file: any) => {
  emits("on-preview", file);
};
let onRemove = (file: any, fileList: any) => {
  emits("on-remove", { file, fileList });
};
let onSuccess = (response: any, file: any, fileList: any) => {
  let uploadItem = props.options.find((item) => {
    item.type === "upload";
  })!;
  model.value[uploadItem.prop!] = { response, file, fileList };
  emits("on-success", { response, file, fileList });
};
let onError = (error: any, file: any, fileList: any) => {
  emits("on-error", { error, file, fileList });
};
let onProgress = (event: any, file: any, fileList: any) => {
  emits("on-progress", { event, file, fileList });
};
let onChange = (file: any, fileList: any) => {
  emits("on-change", { file, fileList });
};
let onExceed = (files: any, fileList: any) => {
  emits("on-exceed", { files, fileList });
};
let beforeUpload = (file: any) => {
  emits("before-upload", file);
};
let beforeRemove = (file: any, fileList: any) => {
  emits("before-remove", { file, fileList });
};
</script>
<style lang="scss" scoped></style>
