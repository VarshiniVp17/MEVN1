<template>
  <v-container>
    <!-- Page Title -->
    <v-row justify="center">
      <v-col cols="12">
        <v-sheet class="pa-6" elevation="2">
          <h1 class="display-1 text-center">About Us</h1>
          <p class="subtitle-1 text-center">SRM Technologies is a global technology consulting and solutions company based in Chennai, India. It offers a range of IT services and solutions across various industries, including software development, product engineering, digital transformation, and IT consulting. SRM Technologies is known for its expertise in delivering technology solutions to help businesses innovate and stay competitive in the digital age. Their services often span across domains such as automotive, healthcare, telecommunications, and more, catering to both domestic and international clients.</p>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Carousel Section -->
    <v-row justify="center">
      <v-col cols="12">
        <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">{{ slide }}</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Company Information Section -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="2">
          <h2 class="headline">Our Mission</h2>
          <p>
            "To empower businesses through innovative technology solutions, driving growth and transformation across industries, while fostering a culture of excellence and integrity."
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Team Members Section -->
    <v-row justify="center">
      <v-col cols="12">
        <v-sheet class="pa-6" elevation="2">
          <h2 class="headline text-center">Our Team</h2>
          <v-row justify="center">
            <v-col cols="12" md="4" v-for="member in team" :key="member.id">
              <v-card class="pa-4" elevation="3">
                <v-avatar size="64">
                  <v-img :src="member.avatar" alt="Team Member"></v-img>
                </v-avatar>
                <h3 class="subtitle-1">{{ member.name }}</h3>
                <p>{{ member.position }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Cards Section -->
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mx-auto" max-width="800">
          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                  <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'Digital Practices',
        'Product Engineering',
        'Automative Engineering',
        'Design Engineering',
        'Salesforce',
      ],
      cards: [
        { title: 'MEVN Stack', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', flex: 12 },
        { title: 'MERN Stack', src: 'https://images.unsplash.com/photo-1580982330720-bd5e0fed108b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', flex: 6 },
        { title: 'FARM Stack', src: 'https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', flex: 6 },
      ],
      team: [
        { id: 1, name: 'Iron Man', position: 'CEO', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Captain America', position: 'CTO', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'Thor', position: 'Lead Developer', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: 4, name: 'Hulk', position: 'Designer', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      ],
    };
  },
};
</script>

</style>
