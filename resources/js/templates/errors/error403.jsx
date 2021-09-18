import {useTranslation} from 'react-i18next'

import ErrorTemplate from './error-template'

const Error403 = () => {
    const {t} = useTranslation()

    return (
        <ErrorTemplate
            error="403"
            image="images/error403.svg"
            text={t('error403')}
        />
    )
}

export default Error403
