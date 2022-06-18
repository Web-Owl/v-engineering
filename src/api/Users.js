import {http} from './Http'

export default {
    all() {
        return http.get('/users.json')
    },
    post(data) {
        return http.post('/users.json', data)
    },
    mail(data) {
        return http.post('/ajax/send.php', data)
    }
}