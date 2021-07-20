<template>
  <div class="container">
    <div class="row">

      <div class="col-6 container-img">
        <img src="../assets/netflix-logo-vector.svg" alt="">
      </div>

      <div class="col-6 container-search">
        <div class="font-cont">
          <input type="text" placeholder="Search" v-model="searchFilm" @keyup.enter="$emit('search', searchFilm)"/>
          <button @click="$emit('search', searchFilm)" ><i class="fas fa-search"></i></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
    data() {
      return {
        searchFilm:''
      }
    }
}
</script>


<style scoped lang="scss">
.container{
  .row{
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    .container-img{
      width: 15%;
      img{
        width: 80%;
      }
    }
    .container-search{
      display: flex;
      flex-direction: row-reverse;
      .font-cont{
        input{
          border-radius: 40px;
          outline: none;
          padding-left: 10px;
        }
        button{
          border-radius: 50px;
          margin-left: 5px;
          border: none;
        }
      }
      
    }
  }
}

</style>
