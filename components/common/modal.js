import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import modalStyles from '../../styles/Modal.module.css'

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
    } else {
        return null
    }
}

const StyledModalOverlay = ({ children }) => <div className={modalStyles.overlay}>{children}</div>

const StyledModal = ({ children }) => <div className={modalStyles.modal}>{children}</div>

const StyledModalHeader = ({ children }) => <div className={modalStyles.header}>{children}</div>

const StyledModalBody = ({ children }) => <div className={modalStyles.body}>{children}</div>

const StyledModalTitle = ({ children }) => <h2 className={modalStyles.title}>{children}</h2>

export default Modal
