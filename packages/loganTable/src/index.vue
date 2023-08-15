<template>
  <el-table
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
    v-bind="$attrs"
  >
    <template
      v-for="(item, index) in tableOptions"
      :key="index"
    >
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit === true">
            <el-input v-model="scope.row[item.prop]"></el-input>
          </template>
          <template v-else>
            <template v-if="currentEdit === scope.$index + scope.column.id">
              <div style="display: flex; align-items: center">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <div @click.stop="clickEditCell">
                  <slot
                    name="editCell"
                    v-if="$slots.editCell"
                    :scope="scope"
                  ></slot>
                  <div
                    style="display: flex; align-items: center; cursor: pointer"
                    v-else
                  >
                    <logan-icon-check
                      style="color: green; padding: 0 10px"
                      @click="confirm(scope)"
                    ></logan-icon-check>
                    <logan-icon-close
                      style="color: red"
                      @click="cancel(scope)"
                    ></logan-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <slot
                v-if="item.slot"
                :name="item.slot"
                :scope="scope"
              ></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <el-icon>
                <component
                  v-if="item.editable"
                  :is="`logan-icon-${toline(editIcon)}`"
                  class="edit"
                  @click.stop="clickEdit(scope)"
                ></component>
              </el-icon>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOption?.label"
      :align="actionOption?.align"
      :width="actionOption?.width"
    >
      <template #default="scope">
        <slot
          name="editRow"
          v-if="scope.row.rowEdit"
        >
        </slot>
        <slot
          name="action"
          :scope="scope"
          v-else
        ></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    class="pagination"
    v-if="pagination"
    :style="{ justifyContent: justifyContent }"
  >
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from "vue";
import { TableOptions } from "./types";
import { toline } from "../../utils";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  elementLoadingText: {
    type: String,
  },
  elementLoadingSpinner: {
    type: String,
  },
  elementLoadingBackground: {
    type: String,
  },
  elementLoadingSvg: {
    type: String,
  },
  elementLoadingSvgViewBox: {
    type: String,
  },
  editIcon: {
    type: String,
    default: "Edit",
  },
  isEditRow: {
    type: Boolean,
    default: false,
  },
  editRowIndex: {
    type: String,
    default: "",
  },
  pagination: {
    type: Boolean,
    default: false,
  },
  paginationAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left",
  },
  currentPage: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  total: {
    type: Number,
    default: 0,
  },
});
let handleSizeChange = (value: number) => {
  emits("sizeChange", value);
};
let handleCurrentChange = (value: number) => {
  emits("currentChange", value);
};
let emits = defineEmits([
  "confirm",
  "cancel",
  "update:editRowIndex",
  "sizeChange",
  "currentChange",
]);
let tableOptions = computed(() => props.options.filter((item) => !item.action));
let actionOption = computed(() => props.options.find((item) => item.action));
let isLoading = computed(() => !props.data || !props.data.length);
let currentEdit = ref<string>("");
let clickEdit = (scope: any) => {
  currentEdit.value = scope.$index + scope.column.id;
};
let confirm = (scope: any) => {
  emits("confirm", scope);
};
let cancel = (scope: any) => {
  emits("cancel", scope);
};
let rowClick = (row: any, column: any) => {
  if (column.label === actionOption.value!.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;
      tableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false;
        }
      });
      if (!row.rowEdit) {
        emits("update:editRowIndex", "");
      }
    }
  }
};
let clickEditCell = (scope: any) => {
  currentEdit.value = "";
};
let tableData = ref<any[]>(cloneDeep(props.data));
let cloneEditRowIndex = ref<string>(props.editRowIndex);
onMounted(() => {
  tableData.value.map((item) => {
    item.rowEdit = false;
  });
});
watch(
  () => props.data,
  (value) => {
    tableData.value = cloneDeep(value);
    tableData.value.map((item) => {
      item.rowEdit = false;
    });
  },
  { deep: true }
);
watch(
  () => props.editRowIndex,
  (value) => {
    if (value) {
      cloneEditRowIndex.value = value;
    }
  },
  { deep: true }
);
let justifyContent = computed(() => {
  if (props.paginationAlign === "left") return "flex-start";
  else if (props.paginationAlign === "right") return "flex-end";
  else return "center";
});
</script>

<style lang="scss" scoped>
.edit {
  cursor: pointer;
  margin-left: 5px;
}

.pagination {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
</style>
