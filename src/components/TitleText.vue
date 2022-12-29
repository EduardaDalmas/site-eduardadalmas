<template>
  <div class="text-title">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextTitle",
});
</script>
