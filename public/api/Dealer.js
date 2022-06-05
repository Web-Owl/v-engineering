import {http} from './Http'

export default {
    all() {
        return http.get('dealers')
    }
}