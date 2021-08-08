<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <hr>
    <button type="submit"> Add Post </button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      body: ""
    }
  },
  methods: {
    ...mapMutations(['addPost']),
    submit() {
      this.addPost( {
        title:  this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius:2px;
  padding: 10px;
  margin-bottom: 10px;



}
</style>