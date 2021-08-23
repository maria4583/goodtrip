import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from '@/pages'
import {Navbar} from '@/components'

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default App
