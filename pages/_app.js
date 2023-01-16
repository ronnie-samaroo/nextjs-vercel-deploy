import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import fetchJson from '../lib/fetchJson'
import useSWR from 'swr'
import Home from '.'
import ForgotPass from './forgot'
import ResetPassword from './reset/[token]'
import Dashboard from './dashboard'
import { API_ENDPOINTS } from '../utils/api-endpoints'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import NProgress from 'nprogress'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/nprogress.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
    const { data: user } = useSWR(API_ENDPOINTS.ME)
    const router = useRouter()
    const OriginalComponent = Component
    if (Component === Home || Component === ForgotPass || Component === ResetPassword) {
        Component = Dashboard
    }

    const getLayout = Component.getLayout || ((page) => page)
    useEffect(() => {
        const handleStart = () => {
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])
    return (
        <SWRConfig
            value={{
                fetcher: fetchJson,
                onError: (err) => {
                    console.error(err)
                },
            }}
        >
            {user?.isLoggedIn ? (
                getLayout(
                    <>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </>,
                )
            ) : OriginalComponent === Component ? (
                <>
                    <Home />
                    <ToastContainer />
                </>
            ) : (
                <>
                    <OriginalComponent />
                    <ToastContainer />
                </>
            )}
        </SWRConfig>
    )
}
