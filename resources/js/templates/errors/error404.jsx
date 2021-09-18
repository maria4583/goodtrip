import {useTranslation} from 'react-i18next'

import ErrorTemplate from './error-template'

const Error403 = () => {
    const {t} = useTranslation()

    return (
        <ErrorTemplate
            error="404"
            image="images/error404.svg"
            text={t('error404')}
        />
    )
}

export default Error403
