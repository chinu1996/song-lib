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
.toolbar__items{
  align-self: center;
}

.toolbar__title {
  color: white;
}

.btn__content {
  color: white;
}
.danger-alert {
  color: red;
}
/* }
.song{
  padding: 20mm;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 20px;

}
.song-artist {
  font-size: 12px;
  
}
.song-genre {
  font-size: 10px;
  
}


.album-image {
  width: 70%;
  margin: 0 auto;
} */
</style>
