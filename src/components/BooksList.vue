<template>
    <div>
        <form class="form-group" @submit.prevent="searchForBooks">
            <input placeholder="Enter title of book..." class="form-control search-input input-block-level" v-model="searchText">
        </form>
        <ul>
            <li v-for="book in books" :key="book.id">
                <Book :book="book.volumeInfo" :api_link="book.selfLink" :book_id="book.id"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Book from './Book.vue';

  export default {
      name: 'BooksList',
      data() {
          return {
              books: [],
              searchText: '',
          }
      },
      methods: {
          searchForBooks: async function() {
              try {
                  const searchText = this.searchText.replace(" ", "+")
                  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyB5EHX0bII6xf10IovVVN-5QVWZ9Ggd4wg`);
                  const books = await res.json();
                  /* Temp array created and merged with this.books so following Filter and Some function can read it*/
                  var temp_array = []
                  temp_array = temp_array.concat(this.books);
                  var array_compare = [];
                  /* Filters the books from the JSON and compares it to the ones NOT on the page already */
                  array_compare = books.items.filter(new_book => !temp_array.some(old_book => new_book.id === old_book.id));
                  this.books = this.books.concat(array_compare)
              }
                catch (error) {
                  console.log(error)
              }
          }

      },
      components: {
          Book
      }
  }
</script>

<style scoped>
@media only screen and (max-width: 700px) {
    ul {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }
}
@media only screen and (min-width: 701px) {
    ul {
        display: grid;
        list-style: none;
        padding: 1rem;
        margin: 0;
        grid-row-gap: 1rem;
        grid-template-columns: repeat(5, 1fr);
    }
}

input {
    width: 100%;
    height: 100%;
    font-size: 2em;
}

form {
    height: 5vh;
}
</style>