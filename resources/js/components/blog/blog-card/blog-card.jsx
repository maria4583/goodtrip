import { Link } from 'react-router-dom'
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Grid,
    Box
} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './blog-card.module.scss'

const BlogCard = ({ image, category, title, date }) => {
    return (
        <Link to="/blog">
            <Card className={styles.card}>
                <CardMedia
                    className={styles.media}
                    image={image}
                    title={title}
                />
                <CardContent className={styles.content}>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography
                                variant="body2"
                                color="textPrimary"
                                component="span"
                            >
                                {category.toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="span"
                            >
                                {date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Typography
                            className={styles.title}
                            variant="h6"
                            component="h6"
                        >
                            {title}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}

BlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default BlogCard