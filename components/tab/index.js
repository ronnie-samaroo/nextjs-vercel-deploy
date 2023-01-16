import Input from '../common/form/input'
import { Form, Formik } from 'formik'
import Tabstyles from '../../styles/Tabs.module.css'
import Spinner from '../common/spinner'

export const ActionTab = ({ initialValues, validationSchema, onSubmit, name, label, status }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ touched, errors, handleBlur, handleChange }) => {
                return (
                    <Form className={Tabstyles.form}>
                        <Input
                            id={name}
                            label={label}
                            name={name}
                            type="text"
                            background="white"
                            placeholder={label}
                            autoComplete="off"
                            error={touched[name] && errors?.[name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        <div className={Tabstyles.crFormCta}>
                            {status === 'pending' ? (
                                <Spinner />
                            ) : (
                                <input
                                    type="submit"
                                    value="ADD"
                                    className={Tabstyles.defaultButton}
                                />
                            )}
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
