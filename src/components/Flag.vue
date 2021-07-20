<template>
  <div class="Flag">
      <img v-if="lang == 'it'" src="../assets/it.png" alt="it-flag">
      <img v-else-if="lang == 'en'" src="../assets/en.png" alt="it-flag">
      <div v-else>{{lang}}</div>
  </div>
</template>

<script>
export default {
  name: "Flag",
  props: {
      lang: String
  }
};
</script>

<style lang="scss" scoped>
.Flag{
    img {
    height: 20px;
    }
}

</style>