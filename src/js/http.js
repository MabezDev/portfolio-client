import axios from 'axios'
import config from '@/js/conf'

var Http = axios.create({
  baseURL: config.serverApiUrl
  // headers: {
  //     /* Note will be null on login, hence we update this in auth.js upon login */
  //     'sl-user-token': null
  // }
})

export default Http
