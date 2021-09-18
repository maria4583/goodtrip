import {
    Hero,
    Categories,
    Directions,
    Blog,
    Subscribe,
    Reviews
} from './components'

import './home.scss'

const Home = () => {
    return (
        <div>
            <Hero/>
            <Categories/>
            <Directions/>
            <Blog/>
            <Subscribe/>
            <Reviews/>
        </div>
    )
}

export default Home
