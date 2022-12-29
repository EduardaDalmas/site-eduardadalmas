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
        "https://drive.google.com/file/d/1N9WTSTd47DW5mM7Sn4fsTTASu8i0psfI/view?usp=sharing"
      );
    },
  },
});
</script>
