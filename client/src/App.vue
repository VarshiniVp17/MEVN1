<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>

      <v-list-item>
    <!-- Logo -->
      <v-list-item-content>
      <v-list-item-title>
        SRMT | MEVNStack
      </v-list-item-title>

      <v-list-item-subtitle>
        Sample MEVN FUll Stack App
      </v-list-item-subtitle>

      </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- template for list items -->
      <vlist dense>

        <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items":key="i" :to="item.link" link>

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        </v-list-item-group>

      </vlist>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SRMT | MEVNStack</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
        { title: 'Home', icon: 'mdi-home', link: "/" },
        { title: 'Add Post', icon: 'mdi-note-plus', link: "/add-post" },
        { title: 'About', icon: 'mdi-help-box', link: "/about" },
        { title: 'Contact', icon: 'mdi-phone', link: "/contact" },
        { title: 'Account', icon: 'mdi-account', link: "/account" },
      ],
  }),
}
</script>
