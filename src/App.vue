<template>
  <div>
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
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['allPosts'])
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
