import {NavLink} from 'react-router-dom'

import RouteList from '@/common/constants/route-list'

import './navbar.scss'

const items = [
    {
        path: RouteList.home,
        label: 'Главная'
    },
    {
        path: RouteList.listings,
        label: 'Объявления'
    },
    {
        path: RouteList.blog,
        label: 'Блог'
    },
]

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="navbar-container">
                    <h2 className="logo">GoodTrip</h2>
                    <ul className="menu">
                        {items.map(item =>
                            <NavLink
                                exact
                                to={item.path}
                                key={item.label}
                                className="menu__item"
                                activeClassName="menu__item_active"
                            >
                                {item.label}
                            </NavLink>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
