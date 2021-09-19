import {useState} from 'react'
import {Container} from '@material-ui/core'

import {Topics, Articles} from './components'

const Blog = () => {
    return (
        <Container>
            <Topics/>
            <Articles/>
        </Container>
    )
}

export default Blog
