import {
    Container,
    Grid,
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import styles from './subscribe.module.scss'

const Subscribe = () => {
    const { t } = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <Container className={styles.container} component="section">
            <Grid container justifyContent="space-between">
                <Grid item xs={5}>
                    <Typography gutterBottom variant="h3" component="h2">
                        Будьте в курсе
                    </Typography>
                    <Typography variant="h6" component="p">
                        Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми
                    </Typography>
                </Grid>
                <Grid item xs={6} component="form" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            id="email"
                            label={t('emailAddress')}
                            name="email"
                            autoComplete="email"
                            className={styles.textField}
                            InputProps={{ className: styles.input }}
                        />
                    </Grid>

                    <Grid item>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Подтверждаю, что я ознакомлен с политикой конфиденциальности"
                            className={styles.checkbox}
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            size="large"
                            className={styles.button}
                        >
                            {t('follow').toUpperCase()}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Subscribe
