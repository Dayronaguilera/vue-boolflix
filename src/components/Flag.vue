<template>
  <div class="Flag">
      <img  :src="flagDinamic" alt="flag">
  </div>
</template>

<script>
export default {
  name: "Flag",
  props: {
      lang: String
  },
  computed: {
        flagDinamic(){
            return require ('../assets/' + this.lang + '.png');
        }
  },
};
</script>

<style lang="scss" scoped>
.Flag{
    img {
    height: 20px;
    }
}

</style>