import {useTranslation} from 'react-i18next'

import styles from './cookie-agreement.module.scss'

const CookieAgreement = () => {
    const {t} = useTranslation()

    const onClick = () => {
        //
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {t("cookieAgreement")}
            </div>
            <button className={styles.confirm} onClick={onClick}>
                {t('confirm')}
            </button>
        </div>
    )
}

export default CookieAgreement
