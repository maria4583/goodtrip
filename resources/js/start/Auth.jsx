import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

import * as RouteTypes from '@/routes/routeTypes'

const Auth = ({route, routeParams, template, type}) => {
    //temporary constants while auth not exists
    const isAuth = false
    const isAdmin = false

    if (type === RouteTypes.ACCOUNT && !isAuth) {
        return <Redirect to="/login"/>
    }

    if (type === RouteTypes.ADMIN && !isAdmin) {
        return <Redirect to="/"/>
    }

    const Template = route.template ?? template
    const Component = route.component

    return (
        <Template>
            <Component {...routeParams}/>
        </Template>
    )
}

Auth.propTypes = {
    route: PropTypes.object.isRequired,
    template: PropTypes.elementType.isRequired,
    type: PropTypes.string.isRequired
}

export default Auth
