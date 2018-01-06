 /* eslint no-undef:"error" */
/* global document */
import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('songs')
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
