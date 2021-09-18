import PropTypes from 'prop-types'

import {Navbar, Footer} from './components'

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout
