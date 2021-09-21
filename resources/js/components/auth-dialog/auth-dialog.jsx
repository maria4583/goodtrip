import {useState} from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Tabs,
    Tab,
    Box,
    Typography
} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

import Login from './login/login'
import Register from './register/register'

const TabPanel = ({children, value, index, ...other}) => (
    <div hidden={value !== index} {...other}>
        {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
)

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

const AuthDialog = ({open, handleClose}) => {
    const [value, setValue] = useState(0)

    const {t} = useTranslation()

    const handleChange = (e, newValue) => setValue(newValue)

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label={
                        <Typography variant="h6">
                            {t('login')}
                        </Typography>
                    }/>
                    <Tab label={
                        <Typography variant="h6">
                            {t('register')}
                        </Typography>
                    }/>
                </Tabs>
            </DialogTitle>
            <DialogContent>
                <TabPanel value={value} index={0}>
                    <Login/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Register/>
                </TabPanel>
            </DialogContent>
        </Dialog>
    )
}

AuthDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default AuthDialog
