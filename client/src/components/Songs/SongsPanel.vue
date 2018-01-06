<template>

      <panel title="Songs">

        <!-- <router-link :to="{name: 'songs-create'}"> OR use @click="navigateTO"-->
          <v-btn 
          fab 
          medium 
          absolute 
          right 
          middle 
          dark 
          class="cyan" 
          slot="action" 
          @click="navigateTo({name: 'songs-create'})">
            <v-icon>add</v-icon>
          </v-btn>

        <div v-for="song in songs" :key="song.id">
        <v-layout>
          <v-flex xs6 class="mt-2">
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

        <v-btn dark class="cyan" 
        @click="navigateTo({name: 'song', params: {
          songId: song.id
            }
            })">View</v-btn>

          <v-flex xs6>
          <img class="album-image" :src="song.albumImage" width="100px" height="100px"/>
          </v-flex>

        </v-layout>


        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongsService'
  
  export default {
    data () {
      return {
        songs: []
      }
    },
    watch: {
      '$route.query.search': {
        immediate: true,
        async handler (value) {
          this.songs = await SongsService.index(value)
        }
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
  font-weight: bold;

}
.song-artist {
  font-size: 16px;
  
}
.song-genre {
  font-size: 16px;
  font-family: monospace;
  
}


.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>