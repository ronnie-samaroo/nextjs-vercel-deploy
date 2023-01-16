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

export default function Service() {
    const [status, setStatus] = useState('idle')
    const [records, setRecords] = useState(null)
    const [loading, setLoading] = useState(false)

    const addService = async ({ service }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_SERVICE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ service }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords()
            return
        })
    }

    const getRecords = async () => {
        setLoading(true)
        await fetchJson(API_ENDPOINTS.GET_SERVICE, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            if (res.success) {
                setRecords(res.data)
                setLoading(false)
            } else {
                toast(res.message)
                setLoading(false)
                return []
            }
        })
    }

    const deleteService = async (id) => {
        await fetchJson(API_ENDPOINTS.DELETE_SERVICE, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then((res) => {
            toast(res.message)
            getRecords()
            return
        })
    }

    const editService = async ({ name }, recordId) => {
        await fetchJson(API_ENDPOINTS.EDIT_SERVICE, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, recordId }),
        }).then((res) => {
            toast(res.message)
            getRecords()
            return
        })
    }

    useEffect(() => {
        getRecords()
    }, [])

    return (
        <div className={Tabstyles.location}>
            <div className={Tabstyles.TabsBlock}>
                <Formik
                    initialValues={{ service: '' }}
                    validationSchema={validationSchema.serviceSchema}
                    onSubmit={addService}
                >
                    {({ touched, errors, handleBlur, handleChange }) => {
                        return (
                            <Form className={Tabstyles.form}>
                                <Input
                                    id="service"
                                    label="service"
                                    name="service"
                                    type="text"
                                    background="white"
                                    placeholder="Add Service"
                                    autoComplete="off"
                                    error={touched.service && errors?.service}
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
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <TableRecord
                    records={records}
                    getRecords={getRecords}
                    handleDelete={deleteService}
                    handleEdit={editService}
                    title="Change Service"
                />
            )}
        </div>
    )
}
