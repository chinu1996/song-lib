<template>
    <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-flex>
  
          <div class="song-title">
            {{song.title}}
          </div>
  
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          </v-flex>
           
  
          <img class="album-image" :src="song.albumImage" />
          <br> {{song.album}}
        </panel>
      </v-flex><v-btn dark class="cyan" 
        @click="navigateTo({name: 'song-edit', params: {
          songId: song.id
            }
            })">Edit</v-btn>

      <v-flex xs6 class="ml-2"><panel title="Youtube Video">
          <youtube :video-id="song.youtubeID" :player-width="250" :player-height="200">
          </youtube>
        </panel>
      </v-flex>

    </v-layout>
      
</template>

<script>
  
  import VueYouTubeEmbed from 'vue-youtube-embed'
  export default {
    props: [
      'song'
    ],
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }

    },
    components: {
      VueYouTubeEmbed
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
  }
</style>
