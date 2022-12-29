<template>
  <q-card class="card" v-for="(option, index) in options" :key="index">
    <q-card-section class="card-icons">
      <p class="card-text-hidden">{{ option.description }}</p>
    </q-card-section>
    <q-card-section class="q-mt-lg">
      <div class="card-text">
        {{ option.text }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardServices",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
});
</script>
