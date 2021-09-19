import {Pagination as PaginationMui} from '@material-ui/lab'
import PropTypes from 'prop-types'

const Pagination = ({count, page, onChange}) => {
    return (
        <PaginationMui
            size="large"
            page={page}
            count={count}
            onChange={onChange}
        />
    )
}

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Pagination
