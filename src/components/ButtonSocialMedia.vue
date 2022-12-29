<template>
  <div v-for="(option, index) in medias" :key="index" class="row q-mt-lg">
    <q-btn
      flat
      class="medias"
      :icon="option.icon"
      @click="abrirLink(option.link, option.icon)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useNotify from "../composables/UseNotify";

export default defineComponent({
  name: "ButtonSocialMedia",
  methods: {
    abrirLink(link, icon) {
      if (icon == "mail_outline") {
        navigator.clipboard.writeText(link);
        this.notifySuccess(link + " copiado para área de transferência");
      } else {
        window.open(link, "_blank");
      }
    },
  },
  props: {
    medias: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { notifySuccess } = useNotify();
    return {
      notifySuccess,
    };
  },
});
</script>
