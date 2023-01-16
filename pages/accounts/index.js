import Layout from '../../components/layout/Layout'
import { AnnouncementProvider } from '../../contexts/announcement'
import styles from '../../styles/Layout.module.css'
import AccountsField from './accounts'

export default function Accounts() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.FullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Accounts</legend>
                    <AccountsField />
                </fieldset>
            </div>
        </div>
    )
}

Accounts.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
