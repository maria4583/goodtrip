import { Container, Box, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { CityCard } from '@/components'

import styles from './directions.module.scss'

const Directions = () => {
    const { t } = useTranslation()

    return (
        <Container component="section">
            <h1>{t('favoriteDirections')}</h1>
            <Box mt={5}>
                <Grid container justifyContent="space-between" spacing={2}>
                    <Grid item xs={2}>
                        <CityCard
                            image="https://i.wowtrip.me/220x150/23/92/23927aedaf7af65570bf34f9c8f50f40.jpeg"
                            title="Москва"
                            subtitle="87 объявлений"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <CityCard
                            image="https://i.wowtrip.me/220x150/2a/b1/2ab108cda3647c32bbc73f0b4d0ba9ae.jpeg"
                            title="Новосибирск"
                            subtitle="65 объявлений"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <CityCard
                            image="https://i.wowtrip.me/220x150/d3/79/d3791085c206d9fc8cb39f23d7d47d16.jpeg"
                            title="Краснодар"
                            subtitle="61 объявлений"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <CityCard
                            image="https://i.wowtrip.me/220x150/44/31/4431d4fa40e2c76ba4274875e558d8f9.jpeg"
                            title="Геленджик"
                            subtitle="53 объявлений"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <CityCard
                            image="https://i.wowtrip.me/220x150/f2/3c/f23c4bdd687476c8672698e884bf5da1.jpeg"
                            title="Крым"
                            subtitle="39 объявлений"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Directions
