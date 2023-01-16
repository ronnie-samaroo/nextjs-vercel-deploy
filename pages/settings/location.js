import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ActionTab } from '../../components/tab'
import fetchJson from '../../lib/fetchJson'
import Tabstyles from '../../styles/Tabs.module.css'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import { validationSchema } from '../../utils/schema'
import { TableRecord } from '../../components/table'
import Spinner from '../../components/common/spinner'

export default function Location() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (id) => {
        setToggleState(id)
    }
    const [status, setStatus] = useState('idle')
    const [records, setRecords] = useState(null)
    const [loading, setLoading] = useState(false)
    const getRecords = async (toggleState) => {
        setLoading(true)
        let apiEndpoint
        switch (toggleState) {
            case 1:
                apiEndpoint = API_ENDPOINTS.GET_COUNTRY
                break
            case 2:
                apiEndpoint = API_ENDPOINTS.GET_CITY
                break
            case 3:
                apiEndpoint = API_ENDPOINTS.GET_AREA
                break
            case 4:
                apiEndpoint = API_ENDPOINTS.GET_STREET
                break
            default:
                break
        }
        await fetchJson(apiEndpoint, {
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

    const addCountry = async ({ country }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_COUNTRY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords(1)
            return
        })
    }
    const addCity = async ({ city }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_CITY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords(2)
            return
        })
    }
    const addArea = async ({ area }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_AREA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ area }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords(3)
            return
        })
    }
    const addStreet = async ({ street }) => {
        setStatus('pending')
        await fetchJson(API_ENDPOINTS.ADD_STREET, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ street }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            getRecords(4)
            return
        })
    }

    const handleDelete = async (id) => {
        let apiEndpoint
        switch (toggleState) {
            case 1:
                apiEndpoint = API_ENDPOINTS.DELETE_COUNTRY
                break
            case 2:
                apiEndpoint = API_ENDPOINTS.DELETE_CITY
                break
            case 3:
                apiEndpoint = API_ENDPOINTS.DELETE_AREA
                break
            case 4:
                apiEndpoint = API_ENDPOINTS.DELETE_STREET
                break
            default:
                break
        }

        await fetchJson(apiEndpoint, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then((res) => {
            toast(res.message)
            getRecords(toggleState)
            return
        })
    }

    const handleEdit = async ({ name }, recordId) => {
        let apiEndpoint
        switch (toggleState) {
            case 1:
                apiEndpoint = API_ENDPOINTS.EDIT_COUNTRY
                break
            case 2:
                apiEndpoint = API_ENDPOINTS.EDIT_CITY
                break
            case 3:
                apiEndpoint = API_ENDPOINTS.EDIT_AREA
                break
            case 4:
                apiEndpoint = API_ENDPOINTS.EDIT_STREET
                break
            default:
                break
        }

        await fetchJson(apiEndpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, recordId }),
        }).then((res) => {
            toast(res.message)
            getRecords(toggleState)
            return
        })
    }

    useEffect(() => {
        getRecords(toggleState)
    }, [toggleState])

    return (
        <div className={Tabstyles.location}>
            <div className={Tabstyles.TabsBlock}>
                <button
                    className={
                        toggleState === 1
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(1)
                    }}
                >
                    country
                </button>
                <button
                    className={
                        toggleState === 2
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(2)
                    }}
                >
                    city
                </button>
                <button
                    className={
                        toggleState === 3
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(3)
                    }}
                >
                    area
                </button>
                <button
                    className={
                        toggleState === 4
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => {
                        toggleTab(4)
                    }}
                >
                    street
                </button>
            </div>
            {toggleState === 1 && (
                <ActionTab
                    initialValues={{ country: '' }}
                    validationSchema={validationSchema.countrySchema}
                    onSubmit={addCountry}
                    name="country"
                    label="country"
                    status={status}
                />
            )}
            {toggleState === 2 && (
                <ActionTab
                    initialValues={{ city: '' }}
                    validationSchema={validationSchema.citySchema}
                    onSubmit={addCity}
                    name="city"
                    label="City"
                    status={status}
                />
            )}
            {toggleState === 3 && (
                <ActionTab
                    initialValues={{ area: '' }}
                    validationSchema={validationSchema.areaSchema}
                    onSubmit={addArea}
                    name="area"
                    label="Area"
                    status={status}
                />
            )}
            {toggleState === 4 && (
                <ActionTab
                    initialValues={{ street: '' }}
                    validationSchema={validationSchema.streetSchema}
                    onSubmit={addStreet}
                    name="street"
                    label="Street"
                    status={status}
                />
            )}
            {loading ? (
                <Spinner />
            ) : (
                <TableRecord
                    records={records}
                    toggleState={toggleState}
                    getRecords={getRecords}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    title="Change location"
                />
            )}
        </div>
    )
}
