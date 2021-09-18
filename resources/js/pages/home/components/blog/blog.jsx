import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Box, Grid, Button, Typography } from '@material-ui/core'

import { BlogCard } from '@/components'

import styles from './blog.module.scss'

const Blog = () => {
    const { t } = useTranslation()

    return (
        <Container component="section">
            <h1>{t('adventureBlog')}</h1>

            <Box mb={1} display="flex" justifyContent="flex-end">
                <Button color="primary" size="large" component={Link} to="/blog" disableElevation>
                    {t('seeAll')}
                </Button>
            </Box>
            
            <Box>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={4}>
                        <BlogCard
                            image="https://cdn.ostrovok.ru/t/x220/blog/06/9b/069b96985e41d1c9b1bd2f0bf3bd8425f063e3a0.png"
                            category="Куда поехать"
                            title="Где отдохнуть без ПЦР-тестов: страны без ковидных ограничений"
                            date="19.08.2021"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <BlogCard
                            image="https://cdn.ostrovok.ru/t/x220/blog/0a/5a/0a5a8d6d8321d0a29613bc2b487242e22c7b0202.png"
                            category="Как путешествовать"
                            title="Достопримечательности Малаги"
                            date="10.08.2021"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <BlogCard
                            image="https://cdn.ostrovok.ru/t/x220/blog/6f/e6/6fe63586ba5e3565da87fe812faf786d6df3d922.png"
                            category="Куда поехать"
                            title="Каш, Патара, Олюдениз: автопутешествие выходного дня"
                            date="22.07.2021"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Blog