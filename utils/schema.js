import * as yup from 'yup'

export const validationSchema = {
    loginSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
        password: yup.string('Enter your password').required('Password is required'),
    }),
    forgotSchema: yup.object({
        username: yup
            .string('Enter your username')
            .email('Enter a valid username')
            .required('Email is required'),
    }),
    resetSchema: yup.object({
        password: yup.string('Enter your username').required('Password is required'),
        confirmPwd: yup.string('Enter your username').required('Password is required'),
    }),
    countrySchema: yup.object({
        country: yup.string('Enter the Country').required('Country is required'),
    }),
    citySchema: yup.object({
        city: yup.string('Enter the City').required('City is required'),
    }),
    areaSchema: yup.object({
        area: yup.string('Enter the Area').required('Area is required'),
    }),
    streetSchema: yup.object({
        street: yup.string('Enter the Street').required('Street is required'),
    }),
    changeNameSchema: yup.object({
        name: yup.string('Enter the new name').required('Name is required'),
    }),
    categorySchema: yup.object({
        category: yup.string('Enter the category').required('Category is required'),
    }),
    serviceSchema: yup.object({
        service: yup.string('Enter the service').required('Service is required'),
    }),
    announcementSchema: yup.object({
        announcement: yup.string('Enter the announcement').required('Announcement is required'),
    }),
    accountSchema: yup.object({
        email: yup
            .string('Enter the email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup.string('Enter the password').required('Password is required'),
        name: yup.string('Enter the name').required('Name is required'),
        surname: yup.string('Enter the surname').required('Surname is required'),
        birthday: yup.date('Enter the birthday').required('Birthday is required'),
        consent: yup.string('Enter the consent').required('Consent is required'),
        role: yup.string('Enter the role').required('Role is required'),
        limit: yup.string('Enter the limit').required('Limit is required'),
    }),
}
