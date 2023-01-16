import Layout from '../../components/layout/Layout'
import styles from '../../styles/Layout.module.css'
import AnnouncementField from './announcement'
import { AnnouncementProvider } from '../../contexts/announcement'

export default function Announcements() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.FullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Announcements</legend>
                    <AnnouncementField />
                </fieldset>
            </div>
        </div>
    )
}

Announcements.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
