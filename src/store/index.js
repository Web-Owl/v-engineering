import { createStore, createLogger } from 'vuex'
import projects from './modules/projects'
import moduleCommon from './modules/common'
import dealer from './modules/dealer'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
      projects,
      moduleCommon,
      dealer
      },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})