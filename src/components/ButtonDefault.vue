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
        "https://drive.google.com/file/d/1bKoQI3rwoT2j3u7HdbfmWxuZ3zNJobIz/view?usp=sharing"
      );
    },
  },
});
</script>
