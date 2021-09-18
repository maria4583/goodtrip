import {useTranslation} from "react-i18next"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Button,
    Box
} from '@material-ui/core'
import PropTypes from 'prop-types'

import styles from './language-select.module.scss'

const LanguageSelect = ({open, handleClose}) => {
    const {t, i18n} = useTranslation()

    const languagesData = i18n.services.resourceStore.data

    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <DialogTitle>
                <Box
                    display="grid"
                    justifyItems="center"
                    gridTemplateColumns="max-content auto"
                >
                    <img
                        src="images/close.svg"
                        className={styles.icon}
                        onClick={handleClose}
                    />
                    <Typography variant="h6" align="center">
                        {t('chooseALanguage')}
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent dividers>
                <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    {Object.values(languagesData).map(language => {
                        const isSelected = language.code === i18n.language

                        return (
                            <Box
                                mx={2}
                                my={3}
                                key={language.code}
                                onClick={() => i18n.changeLanguage(language.code)}
                            >
                                <Button
                                    size="large"
                                    variant={isSelected ? 'contained' : 'text'}
                                    disabled={isSelected}
                                >
                                    {language.label}
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            </DialogContent>
        </Dialog>
    )
}

LanguageSelect.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default LanguageSelect
