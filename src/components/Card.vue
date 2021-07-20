<template>
  <div class="card-container col-2">
    <div class="hover-cont">
      <span v-if="hover" class="original_title">
        <h5>Name: {{original_title}}</h5>
        <h5>Languge: <Flag :lang="lang"/></h5>
        <h5>Vote: {{vote_average}}</h5>
        
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
  props: {
    poster_path: String,
    title: String,
    original_title: String,
    lang: String,
    vote_average: Number

  },
  data() {
    return {
      hover: false,
      Flag: ["it","en"]
    }
  },
  computed: { 
    newPathImg() { //aggiungiamo il pezzo macante a poster-path!
      return  'https://image.tmdb.org/t/p/w342' + this.poster_path
    }
  },
  flagLang() { //controlliamo che lang sia incluso del nostro array 
      if (this.Flag.includes(this.lang)) {
        return require("../assets/" + this.lang + ".png"); // se e incluso aggiunge la bandiera al lang!
      } else {
        return this.lang;
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