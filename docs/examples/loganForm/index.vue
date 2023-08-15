<template>
  <logan-form
    ref="formref"
    :options="options"
    label-width="100px"
    @on-preview="handlePreview"
    @on-remove="handleRemove"
    @on-success="handleSuccess"
    @on-error="handleError"
    @on-progress="handleProgress"
    @on-change="handleChange"
    @on-exceed="handleExceed"
    @before-upload="handlebeforeUpload"
    @before-remove="handlebeforeRemove"
  >
    <template #uploadarea>
      <el-button type="primary">Click to upload</el-button>
    </template>
    <template #uploadtip>
      <div>jpg/png files with a size less than 500KB.</div>
    </template>
    <template #action>
      <el-button
        type="primary"
        @click="submitForm"
      >
        创建
      </el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </logan-form>
</template>

<script setup lang="ts">
import { FormOptions } from "../../../packages/loganForm/src/types/types";
import { ElMessage } from "element-plus";
import { ref } from "vue";
let formref = ref();
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "密码在2-6之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
      showPassword: true,
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        value: "1",
        label: "老板",
      },
      {
        type: "option",
        value: "2",
        label: "经理",
      },
      {
        type: "option",
        value: "3",
        label: "员工",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "checkbox",
        value: "1",
        label: "足球",
      },
      {
        type: "checkbox",
        value: "2",
        label: "篮球",
      },
      {
        type: "checkbox",
        value: "3",
        label: "羽毛球",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "radio",
        value: "male",
        label: "男",
      },
      {
        type: "radio",
        value: "female",
        label: "女",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    // rules: [
    //     {
    //         required: true,
    //         message: '图片不能为空',
    //         trigger: 'blur',
    //     }
    // ],
    uploadAttrs: {
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 3,
    },
  },
  // {
  //     type: 'editor',
  //     label: '描述',
  //     prop: 'desc',
  //     value: '',
  //     editorConfig: {
  //         placeholder: '请输入描述内容',
  //         autoFocus: false
  //     },
  //     rules: [
  //         {
  //             required: true,
  //             message: '描述不能为空',
  //             trigger: 'blur',
  //         }
  //     ],
  // }
];

let submitForm = () => {
  let validate = formref.value.validate();
  let formDate = formref.value.getFormDate();
  validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("提交成功");
      console.log(formDate);
    } else {
      ElMessage.error("表单填写有误");
    }
  });
};

let resetForm = () => {
  formref.value.resetFields();
};

let handlePreview = (file: File) => {};
let handleRemove = (file: File, fileList: FileList) => {};
let handleSuccess = (response: any, file: File, fileList: FileList) => {};
let handleError = (error: any, file: File, fileList: FileList) => {};
let handleProgress = (event: any, file: File, fileList: FileList) => {};
let handleChange = (file: File, fileList: FileList) => {};
let handleExceed = (files: File, fileList: FileList) => {};
let handlebeforeUpload = (file: File) => {};
let handlebeforeRemove = (file: File, fileList: FileList) => {};
// let handlehttpRequest = () => {
// }
</script>

<style lang="scss" scoped></style>
'
