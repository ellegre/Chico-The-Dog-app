<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar class="text-uppercase grey--text" text app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-black">Chico</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="deep-purple accent-1">
      <v-row>
        <v-col class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar-5.png"/>
          </v-avatar>
          <p class="white--text text-subtitle-4 font-weight-bold mt-1">
          Chico The Dog
          </p>
        </v-col>
      </v-row >
      <v-row justify="center" align="center">
        <v-col align-self="center">
          <Popup @projectAdded="snackbar= true"/>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{link.text}}
            </v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: {
    Popup
  },
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' }
      ],
      snackbar: false
    }
  }

}
</script>
