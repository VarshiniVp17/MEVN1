<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="$route.params.message">
      {{ $route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-10" v-for="post in posts" :key="post._id">
        <v-card class="pa-3" :to="{ name: 'post', params: {id: post._id} }">
          <v-img height="250" :src="`/${post.image}`"></v-img>
          <v-btn class="ml-4 mt-8" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Footer Section -->
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column mt-8">
      <div>
         <v-row>
        <v-col cols="4">
          <v-btn icon href="https://www.linkedin.com/">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn icon href="https://www.instagram.com/">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn icon href="https://www.facebook.com/">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </v-col>
      </v-row> 

      </div>

      <div class="pt-4">
        <a href="https://www.srmtech.com/">© SRMTechnologies</a>
      </div>

      <v-divider></v-divider>

      <div class="pb-4">
        {{ new Date().getFullYear() }} — <strong>MEVN Stack</strong>
      </div>
    </v-footer>

  </v-container>
</template>

<script>
import API from "../api";
export default {
  name: 'Home',
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        this.posts = await API.getAllPost();
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
  watch: {
    $route(to, from) {
      if (to.name === 'home' && to.params.message) {
        // If coming back from AddPost.vue, fetch posts again
        this.fetchPosts();
      }
    }
  }
};
</script>
