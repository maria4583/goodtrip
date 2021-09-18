import {Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './review-card.module.scss'

const ReviewCard = ({avatar, fullName, text}) => {
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.avatar}
                image={avatar}
                title="Review Avatar"
            />
            <CardContent>
                <Typography variant="h6" component="h4" align="center" gutterBottom>
                    {fullName}
                </Typography>
                <Typography variant="body1" component="p" align="center" className={styles.text}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

ReviewCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ReviewCard
