import {Link} from 'react-router-dom'
import {Trans, useTranslation} from 'react-i18next'
import {Container, Box, Typography} from '@material-ui/core'

import RouteList from '@/common/constants/route-list/'

import styles from './footer.module.scss'

const socialList = [
    {link: '#', icon: '/images/vk.svg', alt: 'VK'},
    {link: '#', icon: '/images/facebook.svg', alt: 'Facebook'},
    {link: '#', icon: '/images/twitter.svg', alt: 'Twitter'},
    {link: '#', icon: '/images/instagram.svg', alt: 'Instagram'},
    {link: '#', icon: '/images/youtube.svg', alt: 'YouTube'},
    {link: '#', icon: '/images/linkedin.svg', alt: 'LinkedIn'}
]

const navigationList = [
    {link: RouteList.aboutUs, label: 'aboutUs'},
    {link: RouteList.paymentMethods, label: 'paymentMethods'},
    {link: RouteList.reviews, label: 'reviews'},
    {link: RouteList.blog, label: 'blog'},
    {link: RouteList.privacyAndTerms, label: 'privacyAndTerms'},
    {link: RouteList.sitemap, label: 'sitemap'},
    {link: RouteList.knowledgeBase, label: 'knowledgeBase'},
    {link: RouteList.howItWorks, label: 'howItWorks'},
    {link: RouteList.support, label: 'support'},
    {link: RouteList.contact, label: 'contact'}
]

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className={styles.footer}>
            <Container>
                <Box display="flex" justifyContent="space-between">
                    <Box width="300px">
                        <Typography variant="h4" component="h3" gutterBottom>
                            GoodTrip
                        </Typography>
                        <Box className={styles.socialList}>
                            {socialList.map(item =>
                                <Link to={item.link} key={item.label}>
                                    <img src={item.icon} alt={item.label}/>
                                </Link>
                            )}
                        </Box>
                        <Typography variant="body2">
                            <Trans t={t}>copyright</Trans>
                        </Typography>
                    </Box>
                    <Box
                        display="grid"
                        gridTemplateRows="repeat(4, max-content)"
                        gridTemplateColumns="repeat(3, max-content)"
                        gridColumnGap="70px"
                        className={styles.navigation}
                    >
                        {navigationList.map(item =>
                            <Link to={item.link} key={item.label}>
                                <Trans t={t}>{item.label}</Trans>
                            </Link>
                        )}
                    </Box>
                    <div
                        className={styles.scrollToTop}
                        onClick={() => window.scrollTo(0, 0)}
                    />
                </Box>
            </Container>
        </footer>
    )
}

export default Footer
