<template>
  <div>
    <v-layout>
      <v-flex>
        <song-metadata :song="song" />
     
        <youtubeID :youtubeID="song.youtubeID" />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <lyrics :song="song" />
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
  import SongMetadata from '/home/das/Desktop/Proj/song-lib/client/src/components/View/SongMetadata.vue'
  import SongsService from '@/services/SongsService'
  
  import Lyrics from '/home/das/Desktop/Proj/song-lib/client/src/components/View/Lyrics.vue'
  
  export default {
    data () {
      return {
        song: {}
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
      console.log(this.song)
    },
    components: {
      SongMetadata,
      Lyrics
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .song-title {
    font-size: 20px;
  }
  
  .song-artist {
    font-size: 12px;
  }
  
  .song-genre {
    font-size: 10px;
  }
  
  .album-image {
    width: 50%;
    margin: 0 auto;
  }
  
  textarea {
    width: 80%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 24px;
  } */
</style>
