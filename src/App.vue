<template>
  <div>
    <p>Post count: {{ countPosts }}</p>
    <post-form />
    <div
        v-for="post in allPosts"
        class="app"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostForm from "@/store/components/PostForm";

export default {
  name: 'App',
  components: {PostForm},
  computed: mapGetters(['allPosts', 'countPosts']),
  methods: mapActions(['fetchPosts']),
  mounted() {
    this.fetchPosts(10);
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: solid 1px #2c3e50;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
