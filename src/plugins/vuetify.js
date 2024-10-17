/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import jabberwocky from '@/icons/JabberwockyIcon.vue'
import { mdiSwordCross } from '@mdi/js'
import { mdiBookOpenPageVariant } from '@mdi/js'
import { mdiMusic } from '@mdi/js'
import { mdiBookmarkCheck } from '@mdi/js'
import { mdiPlay } from '@mdi/js'
import { mdiPause } from '@mdi/js'
import { mdiStop } from '@mdi/js'
import { mdiRefresh } from '@mdi/js'
import { mdiDownload } from '@mdi/js'
import { mdiVolumeHigh } from '@mdi/js'
import { mdiVolumeMute } from '@mdi/js'
const aliasesCustom = {
  ...aliases,
  jabberwocky,
}


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliasesCustom,
      swords: mdiSwordCross,
      openbook: mdiBookOpenPageVariant,
      music: mdiMusic,
      bookmark: mdiBookmarkCheck,
      play: mdiPlay,
      pause: mdiPause,
      stop: mdiStop,
      refresh: mdiRefresh,
      download: mdiDownload,
      louder: mdiVolumeHigh,
      mute: mdiVolumeMute
    },
    sets: {
      mdi,
    },
  },
})
