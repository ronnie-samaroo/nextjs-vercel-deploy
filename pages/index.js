import { useState } from 'react'
import LoginLayout from '../components/layout/layoutblank'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'
import Input from '../components/common/form/input'
import { Formik, Form } from 'formik'
import { validationSchema } from '../utils/schema'
import useSWR from 'swr'
import fetchJson from '../lib/fetchJson'
import { API_ENDPOINTS } from '../utils/api-endpoints'
import Spinner from '../components/common/spinner'
import { toast } from 'react-toastify'
export default function Home() {
    const { data: user, mutate: mutateUser } = useSWR('/api/user')
    const [status, setStatus] = useState('idle')
    const [usernameErr, setUsernameErr] = useState(null)
    const [pwdErr, setPwdErr] = useState(null)

    const handleSignin = async ({ username, password }) => {
        setUsernameErr(null)
        setPwdErr(null)
        setStatus('pending')
        try {
            mutateUser(
                await fetchJson(API_ENDPOINTS.LOGIN, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                }).then((res) => {
                    if (!res.success) {
                        if (res.message === 'Invalid Password') {
                            setPwdErr(res.message)
                            setUsernameErr(null)
                            toast(res.message)
                            setStatus('resolve')
                            return
                        }
                        toast(res.message)
                        setUsernameErr(res.message)
                        setStatus('resolve')
                    } else {
                        setUsernameErr(null)
                        setPwdErr(null)
                        setStatus('resolve')
                        window.location.reload()
                    }
                }),
            )
        } catch (err) {
            console.log(err)
        }
    }
    if (!user) {
        return null
    }

    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainContent}>
                <div className={loginstyles.loginCard}>
                    <div className={loginstyles.loginCardLogo}>
                        <Image
                            className={styles.logo}
                            src="/logo-color.svg"
                            alt="welcome"
                            width={70}
                            height={70}
                            priority
                        />
                    </div>
                    <h1>Welcome back!</h1>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={validationSchema.loginSchema}
                        onSubmit={handleSignin}
                    >
                        {({ touched, errors, handleBlur, handleChange }) => {
                            return (
                                <div className={loginstyles.formWrapper}>
                                    <Form className={loginstyles.loginForm}>
                                        <Input
                                            id="username"
                                            label="User name"
                                            name="username"
                                            type="text"
                                            background="white"
                                            placeholder="Please enter your user name"
                                            autoComplete="off"
                                            error={
                                                (touched.username && errors?.username) ||
                                                usernameErr
                                            }
                                            onChange={(...args) => {
                                                setUsernameErr(null)
                                                handleChange(...args)
                                            }}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <Input
                                            id="password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            background="white"
                                            placeholder="Please enter your user password"
                                            autoComplete="off"
                                            error={
                                                (touched.password && errors?.password) ||
                                                usernameErr ||
                                                pwdErr
                                            }
                                            onChange={(...args) => {
                                                setPwdErr(null)
                                                handleChange(...args)
                                            }}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <div className={loginstyles.crFormCta}>
                                            {status === 'pending' ? (
                                                <Spinner />
                                            ) : (
                                                <input
                                                    type="submit"
                                                    value="Sign in"
                                                    className={loginstyles.defaultButton}
                                                />
                                            )}
                                        </div>
                                    </Form>
                                </div>
                            )
                        }}
                    </Formik>
                    <p>
                        <Link href="/forgot">Forgot password?</Link>
                    </p>
                </div>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(home) {
    return (
        <>
            <LoginLayout>{home}</LoginLayout>
        </>
    )
}
