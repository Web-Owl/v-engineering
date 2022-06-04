import Http from './Http'

export default {
    all() {
        return Http.get('projects')
    }
}