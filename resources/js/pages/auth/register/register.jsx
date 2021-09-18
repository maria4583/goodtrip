import {useTranslation} from 'react-i18next'
import {TextField, Grid, Button, Box } from '@material-ui/core'

const Register = () => {
    const {t} = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Box component="form" onSubmit={handleSubmit} mt={5}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label={t('firstName')}
                        type="text"
                        autoComplete="given-name"
                        variant="outlined"
                        color="primary"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label={t('lastName')}
                        type="text"
                        autoComplete="family-name"
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
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                    >{t('register')}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Register
