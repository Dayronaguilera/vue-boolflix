<template>
  <div id="app">
    <!-- attviamo la funzione allo scaturirsi di un evento  -->
    <Header @search="searchMovie" />

    <!-- qui mandiamo al main entrambi gli array filtrati  -->
    <Main :arraySeries ="filterArraySeries" :arrayFilms ="filterArrayFilms"/>

  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return{
      popularFilms: [],
      popularSeries:[],
      filterArrayFilms:[],
      filterArraySeries:[]
     
    }
  },
  created() { //sicuramente ce un modo migliore e meno ripetitivo! cercarlo!
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f394a1fa44ab00bde7bf76854bdac775').then((result) => {
      this.popularFilms = result.data.results;
      this.filterArrayFilms = result.data.results;
    });
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=f394a1fa44ab00bde7bf76854bdac775').then((result) => {
        this.popularSeries = result.data.results;
        this.filterArraySeries = result.data.results;
      });
  },
  methods:{ 
   searchMovie(searchFilm){
     if(searchFilm.length == 0){
      this.filterArrayFilms = this.popularFilms
      this.filterArraySeries = this.popularSeries
      return ;
      } 
      //sicuramente ce un modo migliore e meno ripetitivo! cercarlo!
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f394a1fa44ab00bde7bf76854bdac775&query=${searchFilm}`).then((result) =>{
      this.filterArrayFilms = result.data.results;
      });
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f394a1fa44ab00bde7bf76854bdac775&query=${searchFilm}`).then((result) =>{
      this.filterArraySeries = result.data.results;
      });     
    }  
  }
  
}
</script>

<style lang="scss">

// importare il nostro scss generico.
@import "./style/app.scss"
</style>
