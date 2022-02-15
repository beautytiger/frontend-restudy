<template>
  <h3 :style="{color}">GrandSon孙子级组件</h3>
  <hr>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "GrandSon",
    setup() {
        const color = inject("color")
        return {
            color
        }
    }
})

</script>