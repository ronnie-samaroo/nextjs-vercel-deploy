import * as React from 'react'
import { API_ENDPOINTS } from '../utils/api-endpoints'
import fetchJson from '../lib/fetchJson'

const AnnouncementContext = React.createContext()

function AnnouncementProvider(props) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [announcement, setAnnouncement] = React.useState(
        'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.',
    )

    const getAnnouncement = React.useCallback(async () => {
        setIsLoading(true)
        await fetchJson(API_ENDPOINTS.GET_ANNOUNCEMENT, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            if (res.success) {
                setAnnouncement(res.data[0]?.name)
                setIsLoading(false)
            } else {
                toast(res.message)
                setIsLoading(false)
                return []
            }
        })
    }, [])

    const value = React.useMemo(
        () => ({ announcement, setAnnouncement, getAnnouncement, isLoading }),
        [announcement, setAnnouncement, getAnnouncement, isLoading],
    )

    React.useEffect(()=> {
        getAnnouncement()
    }, [])
    return (
        <AnnouncementContext.Provider value={value} {...props}>
            {props.children}
        </AnnouncementContext.Provider>
    )
}

function useAnnouncement() {
    const context = React.useContext(AnnouncementContext)
    if (context === undefined) {
        throw new Error(`useAnnouncement must be used within a AnnouncementProvider`)
    }
    return context
}

export { useAnnouncement, AnnouncementProvider }
