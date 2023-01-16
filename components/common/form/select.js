import React from 'react'
import styles from './select.module.css'

const Select = ({
    label,
    border,
    id,
    error,
    background,
    handleError,
    onChange,
    onBlur,
    options,
    htmlFor = '',
    ...props
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.did_floating_label_content}>
                <select className={styles.did_floating_select}>
                    {props.children}
                </select>
                <label htmlFor={htmlFor} className={styles.did_floating_label}>{label}</label>
            </div>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}
export default Select
