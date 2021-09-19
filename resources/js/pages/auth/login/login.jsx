import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Box, Button, Grid, TextField} from '@material-ui/core'

const Login = () => {
    const {t} = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Box component="form" onSubmit={handleSubmit} mt={2}>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                    <TextField
                        label={t('emailAddress')}
                        type="email"
                        autoComplete="email"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={t('password')}
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                </Grid>
                <Grid container item xs={12} direction="column">
                    <Link to="/lost-password">{t('lostPassword')}</Link>

                    <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                    >{t('login')}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login
