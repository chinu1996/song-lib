<template>
  <v-layout>
    <v-flex xs4>
      <div>

        <panel title="Song Metadata">
          <v-text-field label="Title" required :rules="[required]" v-model="song.title"></v-text-field>
          <v-text-field label="Artist" required :rules="[required]" v-model="song.artist"></v-text-field>
          <v-text-field label="Genre" required :rules="[required]" v-model="song.genre"></v-text-field>
          <v-text-field label="Album" required :rules="[required]" v-model="song.album"></v-text-field>
          <v-text-field label="Album Image" v-model="song.albumImage"></v-text-field>
        </panel>
      </div>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field label="ID" required :rules="[required]" multi-line v-model="song.youtubeID"></v-text-field>
        <v-text-field label="Lyrics" required :rules="[required]" multi-line v-model="song.lyrics"></v-text-field>
      </panel>
      <span class="danger-alert" v-if="error">
        {{error}}
      </span>

      <v-btn dark class="cyan" @click="create">Create Song</v-btn>
    </v-flex>


  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeID: null,
        lyrics: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      // call  api
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the fields required.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
