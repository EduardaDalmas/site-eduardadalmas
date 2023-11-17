<template>
  <q-btn outline class="botao-download" @click="openLink()"
    ><slot></slot
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonDefault",

  methods: {
    openLink() {
      window.open(
        "https://docs.google.com/document/d/1tmYU8nclVR0ogJs7tSHpZ-f8693XtTdDalaEqgC2jss/edit?usp=sharing"
      );
    },
  },
});
</script>
