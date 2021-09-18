import {Provider} from 'react-redux'
import {ThemeProvider} from '@material-ui/styles'

import Routes from './Routes'

// import styles for dates input library
import 'flatpickr/dist/themes/light.css'

//import styles for swiper slider
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import '@/utils/i18next'

import store from '@/store/store'
import theme from '@/common/styles/theme'

const StartApp = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    </Provider>
)

export default StartApp
