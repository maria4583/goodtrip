import PropTypes from 'prop-types'

const AccountLayout = ({children}) => {
    return (
        <div>{children}</div>
    )
}

AccountLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AccountLayout
