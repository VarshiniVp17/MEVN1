<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Post</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
            <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
            <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
            <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Select Image"></v-file-input>
            <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>
          </v-form>
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
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      post: {
        title: "",
        category: "",
        content: "",
        image: null, // Initialize image as null
      },
      image: null,
    };
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);

      try {
        const response = await API.addPost(formData);
        this.$router.push({ name: "home", params: { message: response.message } });
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
  },
};
</script>
