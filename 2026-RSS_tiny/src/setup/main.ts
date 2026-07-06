import { defineAppSetup } from '@slidev/types'
import { VideoPlayer } from '@talks/components'
export default defineAppSetup(({ app, router }) => {
    app.component('VideoPlayer', VideoPlayer)
})