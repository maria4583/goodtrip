import RouteList from '@/common/constants/route-list'
import {Home, Blog, Listings, Auth} from '@/pages'

export default [
    {
        exact: true,
        path: RouteList.home,
        component: Home,
    },
    {
        exact: true,
        path: RouteList.blog,
        component: Blog
    },
    {
        exact: true,
        path: RouteList.listings,
        component: Listings
    },
    {
        exact: true,
        path: RouteList.auth,
        component: Auth
    },
]
