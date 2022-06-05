import {http} from './Http'

export default {
    all() {
        return http.get('users')
    },
    post(data) {
        return http.post('users', data)
    }
}