import { Formik, Form } from 'formik'
import { useState } from 'react'
import { validationSchema } from '../../utils/schema'
import { Button } from '../common/button'
import Input from '../common/form/input'
import Modal from '../common/modal'
import tableStyles from './table.module.css'
import loginstyles from '../../styles/Common.module.css'

export const TableRecord = ({ records, handleDelete, handleEdit, title, addBtn, addedAction }) => {
    const [showModal, setShowModal] = useState(-1)

    if (records?.length === 0) return <div>No record</div>

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {records?.map((record, index) => {
                    return (
                        <tr key={record._id}>
                            <td>{index + 1}</td>
                            <td>{record.name}</td>
                            <td>
                                <Button
                                    style={{ marginRight: '1rem' }}
                                    onClick={() => handleDelete(record._id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    onClick={() => setShowModal(record._id)}
                                    style={{ marginRight: '1rem' }}
                                >
                                    Edit
                                </Button>
                                <Modal
                                    onClose={() => setShowModal(-1)}
                                    show={showModal === record._id}
                                    title={title}
                                >
                                    <Formik
                                        initialValues={{ name: record.name }}
                                        validationSchema={validationSchema.changeNameSchema}
                                        onSubmit={(args) => {
                                            handleEdit({ ...args }, record._id)
                                            setShowModal(-1)
                                        }}
                                    >
                                        {({ touched, errors, handleBlur, handleChange }) => {
                                            return (
                                                <Form>
                                                    <Input
                                                        id="name"
                                                        label="change name"
                                                        name="name"
                                                        type="text"
                                                        background="white"
                                                        placeholder="Change name"
                                                        autoComplete="off"
                                                        error={touched.name && errors?.name}
                                                        onChange={(...args) => {
                                                            handleChange(...args)
                                                        }}
                                                        onBlur={handleBlur}
                                                        defaultValue={record.name}
                                                        required
                                                    />
                                                    <div className={tableStyles.crFormCta}>
                                                        <input
                                                            type="submit"
                                                            value="Change"
                                                            className={loginstyles.defaultButton}
                                                        />
                                                    </div>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                </Modal>
                                {addBtn && (
                                    <Button
                                        onClick={() => {
                                            addedAction(record.name)
                                        }}
                                    >
                                        {addBtn}
                                    </Button>
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
