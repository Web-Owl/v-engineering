import { createStore, createLogger } from 'vuex'
import projects from './modules/projects'
import moduleCommon from './modules/common'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
      projects,
      moduleCommon
      },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})