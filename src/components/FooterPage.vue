<template>
  <div class="footer">
    <div class="row q-ml-md">
      <ButtonSocialMedia :medias="medias"></ButtonSocialMedia>
    </div>
    <div class="row q-mt-md">
      <div class="footer-text">Eduarda Dalmás™ 2025</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonSocialMedia from "src/components/ButtonSocialMedia.vue";

export default defineComponent({
  name: "FooterPage",

  props: {
    medias: {
      type: Array,
      required: true,
    },
  },

  components: {
    ButtonSocialMedia,
  },
});
</script>
