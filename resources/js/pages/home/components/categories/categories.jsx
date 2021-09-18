import {Link} from 'react-router-dom'
import {Container} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

import styles from './categories.module.scss'

const categories = [
    {icon: '/images/flat.svg', label: 'Квартира'},
    {icon: '/images/room.svg', label: 'Комната'},
    {icon: '/images/hotel-room.svg', label: 'Гостиничный номер'},
    {icon: '/images/bed.svg', label: 'Место в комнате'},
    {icon: '/images/house.svg', label: 'Дом'}
]

const Categories = () => {
    const {t} = useTranslation()

    return (
        <Container className={styles.categories}>
            {categories.map(category =>
                <Link to="/listings" className={styles.category} key={category.label}>
                    <img src={category.icon} alt="" />
                    <h3>{t(category.label)}</h3>
                </Link>
            )}
        </Container>
    )
}

export default Categories
