<template>
  <form @submit.prevent="addNewPost">
    <label>TITLE:
    <input type="text" v-model="title">
    </label>
    <label>BODY:
    <input type="text" v-model="body">
    </label>
    <button>Add Post</button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PostForm",
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapActions(['addPost']),
    addNewPost() {
      if (this.title.length > 0 && this.body.length > 0) {
        this.addPost({
          id: Date.now(),
          title: this.title,
          body: this.body
        })
        this.title = this.body = '';
      }
    }
  }
}
</script>

<style scoped>
form {
  margin: 0 auto;
  text-align: center;
  max-width: 300px;
}
  input {
    display: block;
    margin: 10px;
    padding: 10px;
    width: 100%;
    max-width: 300px;
  }
</style>