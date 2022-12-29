<template>
  <div class="text-description">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextDescription",
});
</script>
