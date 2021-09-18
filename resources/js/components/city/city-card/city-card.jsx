import { Link } from 'react-router-dom'
import {
    Card,
    CardContent,
    Typography,
    CardMedia
} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './city-card.module.scss'

const CityCard = ({ image, title, subtitle }) => {
    return (
        <Link to="/listings">
            <Card className={styles.card}>
                <CardMedia
                    className={styles.media}
                    image={image}
                    title={title}
                />
                <CardContent className={styles.content}>
                    <Typography
                        className={styles.title}
                        gutterBottom
                        variant="h6"
                        component="h6"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        component="span"
                    >
                        {subtitle}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

CityCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default CityCard