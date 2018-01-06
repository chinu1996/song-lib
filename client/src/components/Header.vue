<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title>
      <span class="home" @click="navigateTo({name: 'root'})">
        Song-LIB
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- <router-link to="register"> This is one way to do it -->
      <v-btn
        flat 
        dark 
        @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        @click="navigateTo({name: 'register'})">
        Sign UP
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        @click="navigateTo({name: 'login'})">
        Login</v-btn>

        <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        @click="logout">
        Log Out
        </v-btn>

    </v-toolbar-items>
  </v-toolbar>

  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>
<style scoped>
.toolbar__items{
  align-self: center;
}
.home {
  cursor: pointer;
}

.home:hover {
  color: blue;
}
</style>
