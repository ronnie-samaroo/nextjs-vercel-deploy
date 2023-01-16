import Image from 'next/image'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { errorHelper } from '../utils/tools'
//import TextField from '@mui/material/TextField'
//import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'
import loginstyles from '../styles/Common.module.css'

const SignIn = () => {
    const [formType, setFormType] = useState(false)
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Sorry the email is required')
                .email('This is not a valid email'),
            password: Yup.string().required('Sorry the password is required'),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const handleFormType = () => {
        setFormType(!formType)
    }

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
                    <h1>Welcome back!</h1>
                    <p>Please login to your account</p>
                    <div className={loginstyles.formWrapper}>
                        <p>{formType ? 'Register' : 'Sign in'}</p>

                        {loading ? (
                            '...loading'
                        ) : (
                            <form className={loginstyles.loginForm} onSubmit={formik.handleSubmit}>
                                <div className={loginstyles.formGroup}></div>

                                <div className={loginstyles.formGroup}></div>

                                <div className={loginstyles.formGroup}></div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SignIn
