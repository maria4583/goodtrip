import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Container} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectFade} from 'swiper'

import {DateRange} from '@/components/generics'

import styles from './hero.module.scss'

const Hero = () => {
    const [hotel, setHotel] = useState('')
    const [city, setCity] = useState('')
    const [dates, setDates] = useState([])

    const history = useHistory()
    const {t} = useTranslation()

    const handleSubmit = e => {
        e.preventDefault()
        history.push('/listings')
    }

    return (
        <section className={styles.container}>
            <Swiper
                className={styles.slider}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
            >
                <SwiperSlide>
                    <img src="images/background-1.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/background-2.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/background-3.jpg" alt=""/>
                </SwiperSlide>
            </Swiper>

            <div className={styles.content}>
                <div className={styles.mainText}>
                    <h2>{t('heroTitle')}</h2>
                    <p>{t('heroSubTitle')}</p>
                </div>
                <Container className={styles.form} component="form" onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <input type="text" placeholder={t('hotelName')}/>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder={t('city')}/>
                    </div>
                    <div className={styles.input}>
                        <DateRange dates={dates} setDates={setDates}/>
                    </div>

                    <button type="submit" className={styles.button}>{t('search')}</button>
                </Container>
            </div>
        </section>
    )
}

export default Hero

