import 'vuetify/styles'

import {
  mdiAccountMultiple,
  mdiClose,
  mdiEmail,
  mdiExportVariant,
  mdiEyePlus,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiMagnify,
  mdiMapMarkerOutline,
  mdiPhone,
  mdiTwitter,
  mdiWeb,
} from '@mdi/js'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { palette } from '@/assets/styles/colorPalette'

const customAliases = {
  ...aliases,
  magnify: mdiMagnify,
  facebook: mdiFacebook,
  twitter: mdiTwitter,
  linkedin: mdiLinkedin,
  instagram: mdiInstagram,
  exportVariant: mdiExportVariant,
  accountMultiple: mdiAccountMultiple,
  eyePlus: mdiEyePlus,
  close: mdiClose,
  email: mdiEmail,
  phone: mdiPhone,
  mapMarker: mdiMapMarkerOutline,

  web: mdiWeb,
}

const customLightTheme = {
  dark: false,
  colors: {
    background: palette.white,
    surface: palette.surface,
    primary: palette.gray900,
    secondary: palette.gray700,
    accent: palette.accent,
    error: palette.danger,
    info: palette.info,
    success: palette.success,
    warning: palette.warning,

    header: palette.gray900,
    footer: palette.gray700,
    card: palette.gray400,

    'on-primary': palette.white,
    'on-secondary': palette.white,
    'on-background': palette.gray900,
    border: palette.gray500,
    boxShadow: palette.boxShadow,
  },
}

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: customAliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
    },
  },
})
