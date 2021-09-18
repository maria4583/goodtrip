import {useState} from 'react'
import Flatpickr from 'react-flatpickr'
import {Russian} from 'flatpickr/dist/l10n/ru.js'
import {useTranslation} from 'react-i18next'

const DateRange = () => {
    const [date, setDate] = useState()

    const {t} = useTranslation()

    return (
        <Flatpickr
            value={date}
            options={{
                mode:'range',
                allowInput: true,
                minDate: Date.now(),
                locale: Russian
            }}
            placeholder={t('checkInCheckOut')}
            onChange={setDate}
        >

        </Flatpickr>
    )
}

export default DateRange
