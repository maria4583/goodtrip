import {StrictMode} from 'react'
import {render} from 'react-dom'

import StartApp from './start/StartApp'
import './index.scss'

render(
    <StrictMode>
        <StartApp/>
    </StrictMode>,
    document.getElementById('root')
)
