import { createApp } from './main'

const prepareUrlForRouting = url => {
  const { BASE_URL } = process.env
  return url.startsWith(BASE_URL.replace(/\/$/, ''))
    ? url.substr(BASE_URL.length)
    : url
}

export default context => {
  return new Promise(async (resolve, reject) => {

    const { app, router, store } = await createApp()

    router.push(prepareUrlForRouting(context.url))

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      
      // no matched routes
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      Promise.all(matchedComponents.map(({ asyncData, layout }) => {

        /** component layout option */
        
        if (layout) {
          try {
            store.dispatch('settings/setSettings', { layout: { layout } })
          // eslint-disable-next-line no-empty
          } catch (e) {}
        }

        /** component asyncData hook */
        
        return asyncData && asyncData({
          app,
          store,
          router
        })

      })).then(results => {

        /** Page title */

        try {
          const result = results.pop()
          const { title } = result
          context.title = title
        // eslint-disable-next-line no-empty
        } catch(e) {}
        
        context.rendered = () => context.state = store.state

        resolve(app)
      }).catch(reject)

    }, reject)
  })
}
