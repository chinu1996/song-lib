<template>
  <v-layout coloumn>
    <v-flex xs6 offset-xs3>
      <!-- <song-search-panel /> -->
      <songs-panel class="mt-2" />
    
    </v-flex>
  </v-layout>
</template>

<script>
  import SongSearchPanel from '/home/das/Desktop/Proj/song-lib/client/src/components/Songs/SongSearchPanel.vue'
  import SongsPanel from './SongsPanel'
  import SongsService from '@/services/SongsService'
  export default {
    components: {
      SongsPanel,
      SongSearchPanel
    },
    data () {
      return {
        songs: []
      }
    },
    async mounted () {
      // Request backend
      this.songs = (await SongsService.index()).data
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>