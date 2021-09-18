import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import {Russian} from 'flatpickr/dist/l10n/ru'
import English from 'flatpickr/dist/l10n/default'
import {useTranslation} from 'react-i18next'

const getCurrentLocale = lang => {
    switch (lang) {
        case 'ru':
            return Russian
        default:
            return English
    }
}

const DateRange = ({dates, setDates}) => {
    const {t, i18n} = useTranslation()

    const currentLocale = getCurrentLocale(i18n.language)

    return (
        <Flatpickr
            value={dates}
            options={{
                mode:'range',
                allowInput: true,
                minDate: Date.now(),
                locale: currentLocale
            }}
            placeholder={t('checkInCheckOut')}
            onChange={setDates}
        >

        </Flatpickr>
    )
}

DateRange.propTypes = {
    date: PropTypes.array.isRequired,
    setDates: PropTypes.func.isRequired
}

export default DateRange
