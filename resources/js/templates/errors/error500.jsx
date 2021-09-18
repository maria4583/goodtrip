import {useTranslation} from 'react-i18next'

import ErrorTemplate from './error-template'

const Error500 = () => {
    const {t} = useTranslation()

    return (
        <ErrorTemplate
            error="500"
            image="images/error500.svg"
            text={t('error500')}
        />
    )
}

export default Error500
