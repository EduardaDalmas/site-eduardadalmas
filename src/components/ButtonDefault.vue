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
        "https://drive.google.com/file/d/1OSmdg9FXNKdjH9adDfYHnF4QJtCxBI_O/view?usp=sharing"
      );
    },
  },
});
</script>
