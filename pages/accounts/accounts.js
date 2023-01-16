import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import Input from '../../components/common/form/input'
import Spinner from '../../components/common/spinner'
import fetchJson from '../../lib/fetchJson'
import Tabstyles from '../../styles/Tabs.module.css'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import { validationSchema } from '../../utils/schema'
import { TableRecord } from '../../components/table'
import Select from '../../components/common/form/select'
import DatePicker from '../../components/common/form/date-picker'

export default function Accounts() {
    const [status, setStatus] = useState('idle')

    const addAccount = ({ email, password, name, surname, consent, birthday, role }) => {
        console.log(email, password, name, surname, consent, birthday, role)
    }

    return (
        <div className={Tabstyles.location}>
            <div className={Tabstyles.TabsBlock}>
                <Formik
                    initialValues={{ account: '' }}
                    validationSchema={validationSchema.accountSchema}
                    onSubmit={addAccount}
                >
                    {({ touched, errors, handleBlur, handleChange }) => {
                        return (
                            <Form className={Tabstyles.account_form}>
                                <div className={Tabstyles.input_field}>
                                    <Input
                                        id="email"
                                        label="email"
                                        name="email"
                                        type="email"
                                        background="white"
                                        placeholder="Add User Email"
                                        autoComplete="off"
                                        error={touched.email && errors?.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <Input
                                        id="password"
                                        label="password"
                                        name="password"
                                        type="password"
                                        background="white"
                                        placeholder="Add User Password"
                                        autoComplete="off"
                                        error={touched.password && errors?.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <DatePicker
                                        id="birthday"
                                        label="birthday"
                                        name="birthday"
                                        type="birthday"
                                        background="white"
                                        placeholder="Select the birthday"
                                        autoComplete="off"
                                        error={touched.birthday && errors?.birthday}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                                <div className={Tabstyles.input_field}>
                                    <Input
                                        id="name"
                                        label="name"
                                        name="name"
                                        background="white"
                                        placeholder="Add User Name"
                                        autoComplete="off"
                                        error={touched.name && errors?.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <Input
                                        id="surname"
                                        label="surname"
                                        name="surname"
                                        background="white"
                                        placeholder="Add User Surname"
                                        autoComplete="off"
                                        error={touched.surname && errors?.surname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <Input
                                        id="limit"
                                        label="limit"
                                        name="limit"
                                        background="white"
                                        placeholder="Add Limit"
                                        autoComplete="off"
                                        error={touched.limit && errors?.limit}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                                <div className={Tabstyles.input_field}>
                                    <Input
                                        id="consent"
                                        label="consent"
                                        name="consent"
                                        background="white"
                                        placeholder="Add Consent"
                                        autoComplete="off"
                                        error={touched.consent && errors?.consent}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />

                                </div>
                                    <Select name="role" id="role" label="Select Role" required>
                                        <option value={null}>Select Role</option>
                                        <option value="visitor">Visitor</option>
                                        <option value="individual">Individual</option>
                                        <option value="agency">Agency</option>
                                    </Select>
                                    <Select name="accountStatus" id="accountStatus" label="Select Status" required>
                                        <option value="active">Active</option>
                                        <option value="inActive">InActive</option>
                                    </Select>
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
            </div>
        </div>
    )
}
