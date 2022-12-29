<template>
  <q-toolbar class="menu">
    <q-toolbar-title>
      <img class="logo" src="../assets/logo.png" />
    </q-toolbar-title>
    <div class="gt-sm">
      <div class="row">
        <div v-for="(option, index) in options" :key="index">
          <div class="option-menu">
            <a class="option-nav" :href="option.link">{{ option.text }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="col-md-6 row">
        <q-btn
          class="icon-menu"
          flat
          dense
          round
          @click="drawerRight = !drawerRight"
          icon="menu"
          aria-label="Menu"
        />
      </div>
    </div>
  </q-toolbar>

  <q-drawer side="right" v-model="drawerRight" bordered class="bg-grey-10">
    <q-scroll-area class="fit">
      <div v-for="(option, index) in options" :key="index">
        <div class="option-menu q-mt-md">
          <a class="option-nav" :href="option.link">{{ option.text }}</a>
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MenuLayout",

  emits: ["onClickMenu"],

  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      drawerRight: ref(false),
    };
  },
});
</script>
