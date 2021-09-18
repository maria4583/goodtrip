import {MainLayout, AccountLayout, AdminLayout} from '@/templates'

import publicRoutes from './public'
import accountRoutes from './account'
import adminRoutes from './admin'

import * as RouteType from './routeTypes'

export default [
    {
        routes: publicRoutes,
        template: MainLayout,
        type: RouteType.PUBLIC
    },
    {
        routes: accountRoutes,
        template: AccountLayout,
        type: RouteType.ACCOUNT
    },
    {
        routes: adminRoutes,
        template: AdminLayout,
        type: RouteType.ADMIN
    }
]
