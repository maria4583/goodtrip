import {useTranslation} from 'react-i18next'
import {Container} from '@material-ui/core'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Pagination} from 'swiper'

import ReviewCard from './review-card'

import styles from './reviews.module.scss'

const Reviews = () => {
    const {t} = useTranslation()

    return (
        <Container component="section">
            <h1>{t('whatOurUsersSay')}</h1>

            <Swiper
                className={styles.slider}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={100}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                pagination={{clickable: true, dynamicBullets: true}}
                effect="coverflow"
                coverflowEffect={{"rotate": 30, "slideShadows": false}}
            >
                <SwiperSlide>
                    <ReviewCard avatar="images/avatar-1.jpg" fullName="Светлана Попова"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard avatar="images/avatar-2.jpg" fullName="Юлия Пахомова"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard avatar="images/avatar-3.jpg" fullName="Александр Иванов"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard avatar="images/avatar-4.jpg" fullName="Сергей Павлов"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Reviews
