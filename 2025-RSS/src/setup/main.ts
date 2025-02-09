import { defineAppSetup } from '@slidev/types'
import { VideoPlayer } from '@talks/components'
import { createWebHashHistory } from 'vue-router'
export default defineAppSetup(({ app, router }) => {
    router.options.history = createWebHashHistory()
    app.component('VideoPlayer', VideoPlayer)
})