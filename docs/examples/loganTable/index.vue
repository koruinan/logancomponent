<template>
  <logan-table
    :data="tableData"
    :options="options"
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    @confirm="check"
    @cancel="close"
    editIcon="Edit"
    isEditRow
    v-model:editRowIndex="editRowIndex"
    pagination
    :total="total"
    paginationAlign="center"
    @size-change="sizeChange"
    @current-change="currentChange"
    :currentPage="pageNum"
    :pageSize="pageSize"
    background
    stripe
  >
    <template #date="{ scope }">
      <el-icon>
        <logan-icon-timer />
      </el-icon>
      {{ scope.row.date }}
    </template>
    <template #action="{ scope }">
      <el-button
        type="primary"
        @click="edit(scope)"
        >编辑</el-button
      >
      <el-button type="warning">删除</el-button>
    </template>
    <template #editRow="{ scope }">
      <el-button
        type="primary"
        @click="confirm(scope)"
        >确认</el-button
      >
      <el-button type="warning">取消</el-button>
    </template>
    <template #editCell="{ scope }">
      <div style="display: flex; align-items: center">
        <el-button
          size="small"
          type="primary"
          style="margin-left: 12px"
          >确认</el-button
        >
        <el-button size="small">取消</el-button>
      </div>
    </template>
  </logan-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TableOptions } from "../../../packages/loganTable/src/types";
import axios from "axios";

let tableData = ref<TableData[]>([]);
let options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
  {
    label: "操作",
    align: "center",
    prop: "action",
    action: true,
  },
];
let editRowIndex = ref<string>("");
let edit = (scope: any) => {
  editRowIndex.value = "edit";
};
let check = (scope: any) => {
  console.log("父组件", scope);
};
let close = (scope: any) => {
  console.log(scope);
};
let confirm = (scope: any) => {
  console.log("confirm", scope);
};

interface TableData {
  date: string;
  name: string;
  address: string;
}
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
let pageNum = ref<number>(1);
let pageSize = ref<number>(20);
let total = ref<number>(0);
let getData = () => {
  axios
    .post("/api/list", {
      pageNum: pageNum.value - 1,
      pageSize: pageSize.value,
    })
    .then((res: any) => {
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    });
};
onMounted(() => {
  getData();
});
let sizeChange = (value: number) => {
  pageSize.value = value;
  getData();
};
let currentChange = (value: number) => {
  pageNum.value = value;
  getData();
};
</script>

<style lang="scss" scoped></style>
