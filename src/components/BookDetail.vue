<template>
    <transition name="fade">  
        
        <div class="book-wrapper" :style="styles">
            <div class="book-info">
                <router-link to="/" >
                    <div class="back-button" >
                        <font-awesome-icon icon="arrow-left" :style="{color: '222'}" />
                    </div>
                </router-link>
                <h1>{{ book.title }}</h1>
                <h2>{{ book.subtitle }}</h2>
                <h4 v-for="author in book.authors" :key="author">
                    By: {{author}}
                </h4>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
          return {
              book: {},
              styles: {
                  background: '#f2f2f2'
              }
          }
      },
      created: function() {
          this.fetchData();
      },
      methods: {
          fetchData: async function() {
              try {
                  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`);
                  const book = await res.json();
                  this.book = book.volumeInfo;
                  this.styles = {
                    background: `url(${this.book.imageLinks.large}) no-repeat`,
                    backgroundSize: 'cover'
                  }
              }
                catch (error) {
                  console.log(error)
              }
          },
      },
    }
</script>

<style scoped>
.book-wrapper {
    position: relative;
    padding-top: 50vh;
}

.book-info {
    background: white;
    color: #222;
    padding: 2rem 10%;
}

.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.back-button {
    position: absolute;
    font-size: 1.5em;
    color: #222;
    text-align: left;
}
</style>