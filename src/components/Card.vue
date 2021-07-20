<template>
  <div class="card-container col-2">
    <div class="hover-cont">
      <span v-if="hover" class="original_title">
        <h2>{{title}}</h2>
        <Flag :lang="lang"/>
        <i v-for="i in 5" :key="i" class="fa-star" :class="n <= vote_average ? 'fas' : 'far' "></i>
      </span>
    </div>
    <img  
     @mouseover="hover = true"
     @mouseleave="hover = false"
    :src="newPathImg" :alt="`image of ${title}`">
  </div>
</template>

<script>
import Flag from "./Flag.vue"

export default {
  name: 'Card',
  components: {
      Flag,
  }, 
  props: { //ascoltiamo i dati che invia il padre (main)
    poster_path: String,
    title: String,
    lang: String,
    vote_average: Number

  },
  data() {
    return {
      voteRounded: Math.round(this.vote_average / 2),
      hover: false,
    }
  },
  computed: { 
    newPathImg() { //aggiungiamo il pezzo macante a poster-path!
      return  'https://image.tmdb.org/t/p/w342' + this.poster_path
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container{
      position: relative;
      .hover-cont{
        font-size: 15px;
        overflow: visible;
        position: absolute;
        top: 15%;
        left: 10%;
        padding: 10px;  
      }
      img{
        width: 110%;
        height: 100%;
        padding-bottom: 5px;
        &:hover{
          opacity: 0.2;
        }
      }
      .title{
        position: absolute;
        transform: translate(-20px, -70px);
        left: 40px;
        font-size: 20px;
      }
      
    }

</style>