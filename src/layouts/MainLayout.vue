<template>
  <q-responsive>
    <q-layout>
      <q-header id="home">
        <menu-layout :options="menu"></menu-layout>
        <header-page></header-page>
      </q-header>
      <q-page-container class="background">
        <router-view />
      </q-page-container>
    </q-layout>
  </q-responsive>
</template>

<script>
import MenuLayout from "src/components/MenuLayout.vue";
import HeaderPage from "src/components/HeaderPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: { MenuLayout, HeaderPage },

  setup() {
    let menu = [];

    menu = [
      {
        text: "Sobre",
        link: "#sobre",
      },
      {
        text: "Formações",
        link: "#formacoes",
      },
      {
        text: "Experiências",
        link: "#experiencias",
      },
      {
        text: "Contato",
        link: "#contato",
      },
    ];

    return {
      menu,
    };
  },
});
</script>
