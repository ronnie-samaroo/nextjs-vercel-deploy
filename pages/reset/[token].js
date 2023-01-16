import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useFormik } from 'formik'
import styles from '../../styles/Home.module.css'
import loginstyles from '../../styles/Common.module.css'
import Input from '../../components/common/form/input'
import { validationSchema } from '../../utils/schema'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import fetchJson from '../../lib/fetchJson'
import { useRouter } from 'next/router'
import { decode } from 'jsonwebtoken'
import { toast } from 'react-toastify'
import Spinner from '../../components/common/spinner'

export default function ResetPassword() {
    const router = useRouter()
    const { token } = router.query
    const [expired, setExpired] = useState(false)
    const [notMatch, setNotMatch] = useState(false)
    const [username, setUsername] = useState('')
    const [status, setStatus] = useState('idle')

    const handleReset = async ({ password, confirmPwd }) => {
        if (password !== confirmPwd) {
            console.log("password doesn't match")
            setNotMatch(true)
            return
        }
        setStatus('pending')

        await fetchJson(API_ENDPOINTS.RESET, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, username }),
        }).then((res) => {
            toast(res.message)
            setStatus('resolve')
            return
        })
    }
    useEffect(() => {
        if (token) {
            const { exp, username } = decode(token)
            if (Date.now() > exp * 1000) {
                setExpired(true)
            } else {
                setUsername(username)
            }
        }
    }, [token])
    const formik = useFormik({
        initialValues: { password: '', confirmPwd: '' },
        validationSchema: validationSchema.resetSchema,
        onSubmit: handleReset,
    })

    useEffect(() => {
        if (formik.values.password !== formik.values.confirmPwd) {
            setNotMatch(true)
        } else {
            setNotMatch(false)
        }
    }, [formik.values])

    return (
        <div>
            <main className={styles.mainContent}>
                <div className={loginstyles.loginCard}>
                    <div className={loginstyles.loginCardLogo}>
                        <Image
                            className={styles.logo}
                            src="/logo-color.svg"
                            alt="Welcome"
                            width={70}
                            height={70}
                            priority
                        />
                    </div>
                    {expired ? (
                        <>
                            <h2>Sorry, Reset Confirmation Link Expired</h2>
                            <div>
                                <p>
                                    Go back to <Link href="/forgot">reset password page</Link>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>Reset Password</h1>
                            <div className={loginstyles.formWrapper}>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    className={loginstyles.loginForm}
                                >
                                    <Input
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        background="white"
                                        placeholder="Please enter your new password"
                                        autoComplete="off"
                                        error={formik.touched.password && formik.errors?.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required
                                    />
                                    <Input
                                        id="confirmPwd"
                                        label="Confirm password"
                                        name="confirmPwd"
                                        type="password"
                                        background="white"
                                        placeholder="Confirm your new password"
                                        autoComplete="off"
                                        error={
                                            formik.touched.confirmPwd && formik.errors?.confirmPwd
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        required
                                    />
                                    <div className={loginstyles.crFormCta}>
                                        {status === 'pending' ? (
                                            <Spinner />
                                        ) : (
                                            <input
                                                type="submit"
                                                value={`${
                                                    notMatch
                                                        ? "Password doesn't match"
                                                        : 'Reset password'
                                                }`}
                                                className={loginstyles.defaultButton}
                                                disabled={notMatch}
                                            />
                                        )}
                                    </div>
                                </form>
                                <p>
                                    <Link href="/">Sign in</Link>
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
