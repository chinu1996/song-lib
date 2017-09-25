<template>
  <v-layout coloumn>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2">
          <form
            name="song-lib-form"
            autocomplete="off">
           <v-text-field
              label="Email"
              id="testing"
              v-model="email"
            ></v-text-field>
             <v-text-field
              label="Password"
              type="password"
              id="testing"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
            
    
          <div class="error" v-html="error"></div>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'hello',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
  font: outline;
}
</style>
