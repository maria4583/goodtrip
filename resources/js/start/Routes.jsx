import {BrowserRouter, Switch, Route} from 'react-router-dom'

import routesTemplates from '@/routes'

import {MainLayout} from '@/templates'
import {Error404} from '@/templates/errors'
import Auth from './Auth'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {
                routesTemplates.map(routesTemplate => {
                    const {routes, template, type} = routesTemplate

                    return routes.map(route => (
                        <Route
                            exact={route.exact}
                            path={route.path}
                            key={route.path}
                            render={() => (
                                <Auth
                                    route={route}
                                    template={template}
                                    type={type}
                                />
                            )}
                        />
                    ))
                })
            }
            <Route
                path="*"
                render={() =>
                    <MainLayout>
                        <Error404/>
                    </MainLayout>
                }
            />
        </Switch>
    </BrowserRouter>
)

export default Routes
