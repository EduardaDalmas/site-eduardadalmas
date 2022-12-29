<template>
  <div v-for="(option, index) in tech" :key="index">
    <q-btn flat class="techs" :icon="option.icon" />
    <div class="textSubtitle">{{ option.name }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonSocialMedia",

  props: {
    tech: {
      type: Array,
      required: true,
    },
  },

  setup() {},
});
</script>
