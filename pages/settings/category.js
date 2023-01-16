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

export default function Category() {
    const [status, setStatus] = useState('idle')
    const [records, setRecords] = useState(null)
    const [loading, setLoading] = useState(false)

    const addCategory = async ({ category }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_CATEGORY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords()
            return
        })
    }

    const getRecords = async () => {
        setLoading(true)
        await fetchJson(API_ENDPOINTS.GET_CATEGORY, {
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

    const deleteCategory = async (id) => {
        await fetchJson(API_ENDPOINTS.DELETE_CATEGORY, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then((res) => {
            toast(res.message)
            getRecords()
            return
        })
    }

    const editCategory = async ({ name }, recordId) => {
        await fetchJson(API_ENDPOINTS.EDIT_CATEGORY, {
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
                    initialValues={{ category: '' }}
                    validationSchema={validationSchema.categorySchema}
                    onSubmit={addCategory}
                >
                    {({ touched, errors, handleBlur, handleChange }) => {
                        return (
                            <Form className={Tabstyles.form}>
                                <Input
                                    id="category"
                                    label="category"
                                    name="category"
                                    type="text"
                                    background="white"
                                    placeholder="Add Category"
                                    autoComplete="off"
                                    error={touched.category && errors?.category}
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
                    handleDelete={deleteCategory}
                    handleEdit={editCategory}
                    title="Change Category"
                />
            )}
        </div>
    )
}
