import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Box} from '@material-ui/core'

const Login = () => {
    const {t} = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Box component="form" onSubmit={handleSubmit} mt={5}>
            <button>{t('login')}</button>
        </Box>
    )
}

export default Login
