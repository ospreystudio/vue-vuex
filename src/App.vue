<template>
  <div id="app">
    <AddPost />
    <h1> {{ postCounts }} </h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h1> {{ post.title  }} </h1>
        <p> {{ post.body  }} </p>
    </div>

  </div>
</template>

<script>

import AddPost from "./components/AddPost";
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    AddPost
  },
  computed: mapGetters(["validPosts", "postCounts"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    await this.fetchPosts(4)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 1rem;
}
</style>
