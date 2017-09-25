<template>
  <div id="app">
    <page-header />
    <div id="app">
      <v-app>
        <main>
          <v-container fluid>
            <router-view></router-view>

          </v-container>
        </main>
      </v-app>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.toolbar__title {
  color: white;
}

.btn__content {
  color: white;
}
</style>
