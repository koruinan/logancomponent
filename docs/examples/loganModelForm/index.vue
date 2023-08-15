<template>
  <div style="margin-bottom: 10px">点击按钮，查看弹窗表单</div>
  <el-button
    type="primary"
    @click="visible = true"
    >弹窗表单</el-button
  >
  <logan-modelform
    style="width: 600px"
    v-model:visible="visible"
    :options="options"
    title="弹窗"
  >
    <template #uploadarea>
      <el-button type="primary">Click to upload</el-button>
    </template>
    <template #uploadtip>
      <div>jpg/png files with a size less than 500KB.</div>
    </template>
    <template #footer="{ formref }">
      <el-button @click="cancel(formref)">取消</el-button>
      <el-button
        type="primary"
        @click="confirm(formref)"
      >
        确认
      </el-button>
    </template>
  </logan-modelform>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { FormOptions } from "../../../packages/loganForm/src/types/types";
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
  //             trigger: 'change',
  //         }
  //     ],
  // }
];
let visible = ref(false);
let cancel = (form: any) => {
  visible.value = false;
};
let confirm = (form: any) => {
  console.log(form, "formmodel");
  let validate = form.validate();
  let formDate = form.getFormDate();
  validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("提交成功");
      visible.value = false;
      console.log(formDate);
      // nextTick(() => {
      //     form.resetFields()
      // })
    } else {
      ElMessage.error("表单填写有误");
    }
  });
};
</script>

<style lang="scss" scoped></style>
