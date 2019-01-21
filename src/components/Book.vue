<template>
    <router-link :to="bookPath">
      <div class="book">
        <div class="book-overlay"></div>
        <img class="book-image" v-if="book.imageLinks" :src="book.imageLinks.smallThumbnail" :alt="book.title"/>
        <div class="book-details fadeIn-bottom">
          <h2 class="book-title">{{ book.title }}</h2>
          <h4 class="book-subtitle">{{ book.subtitle }}</h4>
        </div>
      </div>
    </router-link>
  
</template>

<script>
  export default {
    props: {
      book: Object,
      api_link: String,
      book_id: String
    },
    computed: {
      bookPath: function(){
        return `/book/${this.book_id}`
      }
    }
  }
</script>

<style scoped>
img {
  box-shadow: 0 0 15px black;
}

*, *:before, *:after{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing:border-box;
  box-sizing: border-box;
}

body{
  background: #f9f9f9;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
}

.main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.container{
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px){
  .container{
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px){
  .container{
    width: 33.33333%;
  }
}

@media screen and (min-width: 701px){
  
}

.book {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.book .book-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.book:hover .book-overlay{
  opacity: 1;
}

.book-image{
  width: 100%;
}

.book-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.book:hover .book-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.book-details h4, .book-details h2{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.book-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

</style>