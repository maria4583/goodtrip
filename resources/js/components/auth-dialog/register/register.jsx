import {Trans, useTranslation} from 'react-i18next'
import {TextField, Grid, Button, Box, Checkbox, FormControlLabel} from '@material-ui/core'
import {Link} from "react-router-dom"

const Register = () => {
    const {t} = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label={<Trans
                            defaults="agreePrivacyPolicy"
                            components={{ link: <Link to="/privacy-policy"/> }}
                        />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                    >{t('register')}</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Register
