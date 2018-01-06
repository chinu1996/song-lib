<template>
    <panel title="Youtube Video">
     <v-layout>
      <v-flex xs6>
        <div class="song-youtubeID">
          {{song.youtubeID}}
        </div>
      </v-flex>
     </v-layout>
    </panel>
</template>

<script>
  
  export default {
    props: [
      'youtubeID',
      'song'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
