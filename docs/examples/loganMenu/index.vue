<template>
  <logan-menu
    :data="data1"
    style="width: 600px"
    defaultactive="1"
    background-color="#545c64"
    text-color="#fff"
  >
  </logan-menu>
</template>

<script setup lang="ts">
let data1 = [
  {
    name: "导航一",
    index: "1",
    icon: "document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "document",
  },
  {
    name: "导航四",
    index: "4",
    icon: "document",
    children: [
      {
        name: "导航四-一",
        index: "4-1-1",
        icon: "document",
        children: [
          {
            name: "导航四-1-1",
            index: "4-1-1",
            icon: "document",
          },
          {
            name: "导航四-1-2",
            index: "4-1-2-1",
            icon: "document",
            children: [
              {
                name: "导航四-1-2-1",
                index: "4-1-2-1",
                icon: "document",
              },
              {
                name: "导航四-1-2-2",
                index: "4-1-2-2",
                icon: "document",
              },
              {
                name: "导航四-1-2-3",
                index: "4-1-2-3-1",
                icon: "document",
                children: [
                  {
                    name: "导航四-1-2-3-1",
                    index: "4-1-2-3-1",
                    icon: "document",
                  },
                  {
                    name: "导航四-1-2-3-2",
                    index: "4-1-2-3-2",
                    icon: "document",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "导航四-二",
        index: "4-2",
        icon: "document",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
