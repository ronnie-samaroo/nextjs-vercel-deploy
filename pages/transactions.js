import Layout from '../components/layout/Layout'
import { AnnouncementProvider } from '../contexts/announcement'
import styles from '../styles/Layout.module.css'

export default function Transactions() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.PageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Transactions</legend>
                    <p>Content</p>
                </fieldset>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Welcome back</legend>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue mauris
                        sed diam luctus consequat. Cras eu consectetur sapien. Donec dignissim vitae
                        massa eu porta. Ut odio massa, accumsan placerat nunc eget, fermentum
                        egestas diam. Phasellus sagittis lorem eu massa consequat porttitor. In id
                        ullamcorper neque. Maecenas semper mi eget mi imperdiet, eu auctor nibh
                        aliquet. Sed a porta nunc.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue mauris
                        sed diam luctus consequat. Cras eu consectetur sapien. Donec dignissim vitae
                        massa eu porta. Ut odio massa, accumsan placerat nunc eget, fermentum
                        egestas diam. Phasellus sagittis lorem eu massa consequat porttitor. In id
                        ullamcorper neque. Maecenas semper mi eget mi imperdiet, eu auctor nibh
                        aliquet. Sed a porta nunc.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue mauris
                        sed diam luctus consequat. Cras eu consectetur sapien. Donec dignissim vitae
                        massa eu porta. Ut odio massa, accumsan placerat nunc eget, fermentum
                        egestas diam. Phasellus sagittis lorem eu massa consequat porttitor. In id
                        ullamcorper neque. Maecenas semper mi eget mi imperdiet, eu auctor nibh
                        aliquet. Sed a porta nunc.
                    </p>
                </fieldset>
            </div>
        </div>
    )
}

Transactions.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
