import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {DateRangePicker} from "react-dates"
import moment from 'moment'
import './hero.scss'

const Hero = () => {
    const [startDate, setStartDate] = useState(moment())
    const [endDate, setEndDate] = useState(moment().add(2, 'days'))
    const [focusedInput, setFocusedInput] = useState()

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push('/listings')
    }

    return (
        <section className="hero">
            <div className="wrapper">
                <div className="main-text">
                    <h2>Найдите свой идеальный отель</h2>
                    <p>Путешествуйте по всему миру, чувствуя себя как дома</p>
                </div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="search-form__input">
                        <input type="text" placeholder="Название отеля"/>
                    </div>
                    <div className="search-form__input">
                        <input type="text" placeholder="Город"/>
                    </div>
                    <div className="search-form__input">
                        <DateRangePicker
                            titleText="Дата въезда - выезда"
                            startDatePlaceholderText="Дата въезда"
                            endDatePlaceholderText="Дата выезда"
                            minimumNights={1}
                            startDate={startDate}
                            minDate={startDate}
                            maxDate={endDate}
                            hideKeyboardShortcutsPanel={true}
                            noBorder={true}
                            startDateId="start_date_id"
                            endDate={endDate}
                            endDateId="end_date_id"
                            onDatesChange={({start, end}) => {
                                setStartDate(start)
                                setEndDate(end)
                            }}
                            focusedInput={focusedInput}
                            onFocusChange={value => setFocusedInput(value)}
                        />
                    </div>

                    <button type="submit" className="search-form__button">Поиск</button>
                </form>
            </div>
        </section>
    )
}

export default Hero
