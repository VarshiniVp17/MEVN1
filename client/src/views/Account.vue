<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>View Profile</v-toolbar-title>
    </v-app-bar>

    <!-- Profile information -->
    <v-container class="my-6">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="mx-auto" max-width="600">
            <v-img height="300" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" cover></v-img>

            <v-card-text class="text-center">
              <v-avatar size="100">
                <v-img src="../assets/vp.png" contain></v-img>
              </v-avatar>
              <h2 class="headline mt-2">Varshini Prakash</h2>
              <h3 class="subtitle">Software Developer</h3>
              <v-divider class="my-4"></v-divider>
              <p class="text-center">
                Full Stack, MERN Stack and MEVN Stack.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-card class="mt-6">
        <v-card-title>Recent Activities</v-card-title>

        <v-list>
          <v-list-item-group>
            <a v-for="(activity, index) in activities" :key="index" :href="activity.link" target="_blank" class="text-decoration-none">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="activity.avatar" alt="Avatar"></v-img>
                </v-list-item-avatar>
  
                <v-list-item-content>
                  <v-list-item-title>{{ activity.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ activity.date }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ activity.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </a>
          </v-list-item-group>
        </v-list>
      </v-card>

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
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const activities = ref([
    {
      title: 'Posted a new article on Zoho connect',
      date: '2 days ago',
      description: 'MEVN and MERN Stack on Zoho connect',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      link: 'https://peopleplus.zoho.com/773711139/zp#home/dashboard',
    },
    {
      title: 'Liked a post on Zoho people',
      date: '5 days ago',
      description: 'Liked a post on Zoho People plus',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      link: 'https://peopleplus.zoho.com/773711139/zp#home/dashboard',
    },
  ]);
</script>

<style>

  .headline {
    font-size: 24px;
    font-weight: bold;
  }

  .subtitle {
    font-size: 18px;
    color: grey;
  }

  .text-decoration-none {
    text-decoration: none;
    color: inherit;
  }
</style>
