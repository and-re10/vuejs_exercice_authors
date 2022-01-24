<template>
  <div class="hello">
    <div style="width: 100%; min-height: 400px; background-color: lightgrey; border-radius: 4px">
      <h1 class="title">Authors</h1>
      <h1>Thematics</h1>
        <div style="display: flex; flex-direction: row; justify-content: center; width: 100%; margin: 30px 0px">
          <div @click="handlefilterThematics(thematic)" v-for="(thematic, i) in getThematics" :key="i" class="btn-filter">
            <a type="button">{{thematic}}</a>
          </div>
        </div>
      <h1>Other filters</h1>
      <div style="display: flex; flex-direction: row; justify-content: center; width: 100%; margin: 30px 0px">
        <div @click="getAllAuthors()" class="btn-filter">
          <a type="button">All</a>
        </div>
        <div @click="filterByLikes()" class="btn-filter">
          <a type="button">Likes</a>
        </div>
        <div @click="filterByAlphabeticOrder()" class="btn-filter">
          <a type="button">Alphabetic</a>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around; width: 100%; height: 100%">
        <div v-for="(author, i) in filterThematics" :key="i" class="author_card">
          <div class="row">
            <span class="card_title">First Name: </span>
            <p :style="[ author.first_name === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{author?.first_name}}</p>
          </div>
          <div class="row">
            <span class="card_title">Last Name: </span>
            <p :style="[ author.last_name === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{author?.last_name}}</p>
          </div>
          <div class="row">
            <span class="card_title">Thematic: </span>
            <p :style="[ author.thematic === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{author?.thematic}}</p>
          </div>
          <div class="row">
            <span class="card_title">Number of Likes: </span>
            <p :style="[ author.nb_likes === 'not found' ? {color: 'crimson'} : {color: null}, {fontWeight: 'bold'}]">{{author?.nb_likes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import thematics from '../assets/thematics.json'
import authors from '../assets/authors.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      thematics: thematics,
      filteredAuthors: authors,
      authors: authors,
      // filter: undefined,
      thematic: undefined,
      otherFilters: ['likes', 'alphabetic']
    }
  },
  mounted () {
    this.authors.forEach((author, i) => {
      if (author.first_name === null) {
        author.first_name = 'not found'
      } else if (author.last_name === null) {
        author.last_name = 'not found'
      } else if (author.thematic === null) {
        author.thematic = 'not found'
      } else if (author.nb_likes === null) {
        author.nb_likes = 'not found'
      }
    })
  },
  methods: {
    handlefilterThematics (thematic) {
      this.thematic = thematic
      this.filteredAuthors = []
    },
    // handleOtherFilter (filter) {
    //   // this.filteredAuthors = []
    //   if (filter !== 'all') {
    //     this.filter = filter
    //   } else {
    //     this.filter = undefined
    //   }
    //   console.log('handleOtherFilter')
    //   console.log(this.filteredAuthors)
    //   // if (filter === 'alphabetic') {
    //   //   // this.filterByAlphabeticOrder()
    //   // } else if (filter === 'likes') {
    //   //   // this.filterByLikes()
    //   // }
    // },
    filterColor (author) {
      return author?.nb_likes === 'not found' ? 'red' : 'black'
    },
    getAllAuthors () {
      this.thematic = undefined
      this.filteredAuthors = []
      this.authors.forEach((author, i) => {
        this.filteredAuthors.push(author)
      })
      return this.filteredAuthors
    },
    filterByAlphabeticOrder () {
      this.thematic = 'alphabetic'
      this.filteredAuthors.sort((a, b) => {
        return a.last_name === b.last_name ? 0 : a.last_name < b.last_name ? -1 : 1
      })
      console.log(this.filteredAuthors)
      return this.filteredAuthors
    },
    filterByLikes () {
      this.thematic = 'likes'
      var arrayNbLikesFound = []
      var arrayNbLikesNotFound = []
      this.filteredAuthors.forEach((author, i) => {
        if (author.nb_likes !== 'not found') {
          arrayNbLikesFound.push(author)
        } else {
          arrayNbLikesNotFound.push(author)
        }
      })
      arrayNbLikesFound.sort((a, b) => a.nb_likes - b.nb_likes)
      this.filteredAuthors = [...arrayNbLikesNotFound, ...arrayNbLikesFound]
      console.log(this.filteredAuthors)
      return this.filteredAuthors
    }
  },
  computed: {
    getThematics () {
      const array = []
      this.thematics.forEach((thematic, i) => {
        if (thematic !== null) {
          array.push(thematic)
        }
      })
      return array
    },
    filterThematics () {
      if (this.thematic === undefined) {
        return this.authors
      } else {
        this.authors.forEach((author, i) => {
          if (author.thematic === this.thematic) {
            this.filteredAuthors.push(author)
          }
        })
        // if (this.filter === 'likes') {
        //   this.filterByLikes()
        //   return this.filteredAuthors
        // } else if (this.filter === 'alphabetic') {
        //   this.filterByAlphabeticOrder()
        //   return this.filteredAuthors
        // }
        return this.filteredAuthors
      }
    }
    // testFilter () {
    //   if (this.filter)
    // }
    // filterByAlphabeticOrder () {
    //   this.filteredAuthors.sort((a, b) => {
    //     return a.last_name === b.last_name ? 0 : a.last_name < b.last_name ? -1 : 1
    //   })
    //   console.log(this.filteredAuthors)
    //   return this.filteredAuthors
    // },
    // filterByLikes () {
    //   var arrayNbLikesFound = []
    //   var arrayNbLikesNotFound = []
    //   this.filteredAuthors.forEach((author, i) => {
    //     if (author.nb_likes !== 'not found') {
    //       arrayNbLikesFound.push(author)
    //     } else {
    //       arrayNbLikesNotFound.push(author)
    //     }
    //   })
    //   arrayNbLikesFound.sort((a, b) => a.nb_likes - b.nb_likes)
    //   this.filteredAuthors = [...arrayNbLikesNotFound, ...arrayNbLikesFound]
    //   console.log(this.filteredAuthors)
    //   return this.filteredAuthors
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .author_card {
    width: 30%;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .card_title {
    margin-right: 10px;
  }
  .btn-filter {
    width: 150px;
    height: 30px;
    background-color: #41ba82;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-filter:active {
    opacity: 50%;
  }
  .title {
    border-radius: 4px 4px 0px 0px;
    background-color: #41ba82;
    padding: 20px 0px;
  }
</style>
