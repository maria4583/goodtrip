import {useState} from 'react'
import {Box, Chip, Divider, Typography} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

const topics = [
    {id: 1, label: 'Куда поехать'},
    {id: 2, label: 'Где остановиться'},
    {id: 3, label: 'Как путешествовать'},
    {id: 4, label: 'Советы экспертов'}
]

const TopicItem = ({topic, onClick}) => (
    <Chip
        label={
            <Typography variant="body1" component="span">
                {topic.label}
            </Typography>
        }
        variant="outlined"
        size="medium"
        style={{marginRight: 10}}
        onClick={() => onClick(topic.id)}
    />
)

const Topics = () => {
    const {t} = useTranslation()

    const onSelectTopic = topic => {
        // ...
    }

    return (
        <>
            <div>
                {topics.map(topic =>
                    <TopicItem
                        topic={topic}
                        onClick={onSelectTopic}
                    />
                )}
            </div>
            <Box mt={2}>
                <Divider/>
            </Box>
        </>
    )
}

export default Topics
