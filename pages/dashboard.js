import Layout from '../components/layout/Layout'
import styles from '../styles/Layout.module.css'
import Tabstyles from '../styles/Tabs.module.css'
import { useState } from 'react'
import { AnnouncementProvider } from '../contexts/announcement'

function Tabs() {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className={Tabstyles.TabsContainer}>
            <div className={Tabstyles.TabsBlock}>
                <div
                    className={
                        toggleState === 1
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => toggleTab(1)}
                >
                    Approvals
                </div>
                <div
                    className={
                        toggleState === 2
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => toggleTab(2)}
                >
                    Verifications
                </div>
                <div
                    className={
                        toggleState === 3
                            ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                            : Tabstyles.Tabs
                    }
                    onClick={() => toggleTab(3)}
                >
                    Requests & Reports
                </div>
            </div>

            <div className={Tabstyles.ContentTabs}>
                <div
                    className={
                        toggleState === 1
                            ? `${Tabstyles.Content} ${Tabstyles.ActiveContent}`
                            : Tabstyles.Content
                    }
                >
                    <table>
                        <tr>
                            <th className={styles.td20}>Listing ID</th>
                            <th className={styles.td30}>Name</th>
                            <th className={styles.td25}>Status</th>
                            <th className={styles.td25}>Date</th>
                        </tr>
                        <tr>
                            <td>243</td>
                            <td>Maria</td>
                            <td className={styles.green}>New</td>
                            <td>25.12.2022 - 14:23</td>
                        </tr>
                        <tr>
                            <td>247</td>
                            <td>Andrea</td>
                            <td className={styles.green}>New</td>
                            <td>25.12.2022 - 23:41</td>
                        </tr>
                        <tr>
                            <td>298</td>
                            <td>Elle90</td>
                            <td className={styles.green}>New</td>
                            <td>25.12.2022 - 20:15</td>
                        </tr>
                        <tr>
                            <td>109</td>
                            <td>Helen</td>
                            <td className={styles.green}>New</td>
                            <td>21.12.2022 - 17:50</td>
                        </tr>
                    </table>
                </div>
                <div
                    className={
                        toggleState === 2
                            ? `${Tabstyles.Content} ${Tabstyles.ActiveContent}`
                            : Tabstyles.Content
                    }
                >
                    <table>
                        <tr>
                            <th className={styles.td20}>Listing ID</th>
                            <th className={styles.td30}>Name</th>
                            <th className={styles.td25}>Status</th>
                            <th className={styles.td25}>Date</th>
                        </tr>
                        <tr>
                            <td>243</td>
                            <td>Maria</td>
                            <td>New</td>
                            <td>25.12.2022 - 14:23</td>
                        </tr>
                        <tr>
                            <td>247</td>
                            <td>Andrea</td>
                            <td>New</td>
                            <td>25.12.2022 - 23:41</td>
                        </tr>
                        <tr>
                            <td>298</td>
                            <td>Elle90</td>
                            <td className={styles.green}>Updated</td>
                            <td>25.12.2022 - 20:15</td>
                        </tr>
                        <tr>
                            <td>109</td>
                            <td>Helen</td>
                            <td>Requested</td>
                            <td>21.12.2022 - 17:50</td>
                        </tr>
                        <tr>
                            <td>223</td>
                            <td>Andrea</td>
                            <td>Completed</td>
                            <td>15.12.2022 - 09:15</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Maria29</td>
                            <td>Existed</td>
                            <td>25.12.2022 - 19:27</td>
                        </tr>
                    </table>
                </div>

                <div
                    className={
                        toggleState === 3
                            ? `${Tabstyles.Content} ${Tabstyles.ActiveContent}`
                            : Tabstyles.Content
                    }
                >
                    <table>
                        <tr>
                            <th className={styles.td20}>Listing ID</th>
                            <th className={styles.td30}>Name</th>
                            <th className={styles.td25}>Status</th>
                            <th className={styles.td25}>Date</th>
                        </tr>
                        <tr>
                            <td>243</td>
                            <td>Maria</td>
                            <td className={styles.red}>Requested</td>
                            <td>25.12.2022 - 14:23</td>
                        </tr>
                        <tr>
                            <td>247</td>
                            <td>Andrea</td>
                            <td className={styles.red}>Reported</td>
                            <td>25.12.2022 - 23:41</td>
                        </tr>
                        <tr>
                            <td className={styles.green}>298</td>
                            <td className={styles.green}>Elle90</td>
                            <td className={styles.green}>Solved</td>
                            <td className={styles.green}>25.12.2022 - 20:15</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard() {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.PageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Dashboard</legend>
                    <Tabs />
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

Dashboard.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
