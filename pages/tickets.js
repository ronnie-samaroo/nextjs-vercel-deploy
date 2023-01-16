import Layout from '../components/layout/Layout'
import { AnnouncementProvider } from '../contexts/announcement'
import styles from '../styles/Layout.module.css'

export default function Tickets() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.PageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Support Tickets</legend>
                    <p>System offline</p>
                </fieldset>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Summary</legend>
                    <p>System offline</p>
                </fieldset>
            </div>
        </div>
    )
}

Tickets.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
