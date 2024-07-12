<template>
  <v-app>
 
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Contact Us</v-toolbar-title>
    </v-app-bar>


    <v-container class="my-6">
      <v-row>

        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="600">
            <v-card-title class="primary">
              <h2 class="headline mb-0">Get In Touch</h2>
            </v-card-title>

            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field v-model="form.name" label="Name" required></v-text-field>
                <v-text-field v-model="form.email" label="Email" required type="email"></v-text-field>
                <v-textarea v-model="form.message" label="Message" required></v-textarea>

                <v-btn type="submit" color="primary" class="mt-4">Send Message</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Contact Information -->
        <v-col cols="12" md="6">
          <v-card class="mx-auto" max-width="600">
            <v-card-title class="primary">
              <h2 class="headline mb-0">Contact Information</h2>
            </v-card-title>

            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>5th Floor,RMZ MILLENIA BUSINESS PARK-II, Chennai</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>044 4010 3000</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>info@srmtech.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
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
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const form = ref({
    name: '',
    email: '',
    message: '',
  });

  function submitForm() {
    
    console.log('Form submitted:', form.value);
 
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
}
  

</script>

<style>
  .primary {
    background-color: #020a11;
    color: white;
  }

  .headline {
    font-size: 24px;
    font-weight: bold;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .mt-4 {
    margin-top: 1.5rem;
  }
</style>
