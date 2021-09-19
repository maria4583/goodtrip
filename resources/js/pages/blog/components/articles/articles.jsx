import {Grid, Box} from '@material-ui/core'
import PropTypes from 'prop-types'

import {BlogCard, Pagination} from '@/components'

const Articles = ({page, setPage}) => {
    return (
        <Box my={3}>
            <Grid container spacing={2} justifyContent="center">
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
                <Grid item xs={4}>
                    <BlogCard
                        image="https://cdn.ostrovok.ru/t/x220/blog/06/9b/069b96985e41d1c9b1bd2f0bf3bd8425f063e3a0.png"
                        category="Куда поехать"
                        title="Где отдохнуть без ПЦР-тестов: страны без ковидных ограничений"
                        date="19.08.2021"
                    />
                </Grid>
                <Grid item>
                    <Pagination
                        page={page}
                        count={15}
                        onChange={(e, value) => setPage(value)}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

Articles.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
}

export default Articles
