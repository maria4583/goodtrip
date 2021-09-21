import RouteList from '@/common/constants/route-list'
import {Home, Blog, Listings} from '@/pages'

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
]
