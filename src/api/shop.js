 const _projects = []
  
  export default {
    async getProjects () {
      await wait(100)
      return _projects
    },
  }
  
  function wait (ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }