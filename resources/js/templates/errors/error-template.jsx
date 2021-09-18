import {Link} from 'react-router-dom'
import {Box, Typography, Button} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import PropTypes from 'prop-types'

import RouteList from '@/common/constants/route-list'

const ErrorTemplate = ({error, image, text}) => {
    const {t} = useTranslation()

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            py={5}
        >
            <img src={image} width="300px" alt={error}/>

            <Box mt={2} mb={4}>
                <Typography variant="h1" component="h1" align="center">
                    {error}
                </Typography>
                <Typography variant="body1" component="p" align="center">
                    {text}
                </Typography>
            </Box>

            <Button variant="outlined" component={Link} to={RouteList.home}>
                {t('backToHome').toUpperCase()}
            </Button>
        </Box>
    )
}

ErrorTemplate.propTypes = {
    error: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ErrorTemplate
