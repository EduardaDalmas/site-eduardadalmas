<template id="home">
  <div class="box-slogan">
    <div class="slogan">
      "O melhor trabalho acontece quando você sabe que não é apenas trabalho,
      mas algo que vai
      <span class="destaque">melhorar a vida das pessoas</span>".
    </div>
    <div class="slogan-mini">
      Satya Nadella - diretor executivo da Microsoft
    </div>
  </div>
  <divider-page id="sobre"></divider-page>
</template>

<script>
import { defineComponent } from "vue";
import DividerPage from "./DividerPage.vue";
export default defineComponent({
  name: "HeaderPage",

  components: {
    DividerPage,
  },
});
</script>
