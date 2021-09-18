import {useState} from 'react'
import {
    Container,
    Tabs,
    Tab,
    Box,
    Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import Login from './login/login'
import Register from './register/register'

function TabPanel({children, value, index, ...other}) {
    return (
        <div hidden={value !== index} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

const Auth = () => {
    const [value, setValue] = useState(0)

    const {t} = useTranslation()

    const handleChange = (e, newValue) => setValue(newValue)

    return (
        <Container maxWidth="sm">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label={t('login')} />
                <Tab label={t('register')} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
            </TabPanel>
        </Container>
    )
}

export default Auth
