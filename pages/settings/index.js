import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import styles from '../../styles/Layout.module.css'
import Tabstyles from '../../styles/Tabs.module.css'
import Location from './location'
import Category from './category'
import Service from './service'
import { AnnouncementProvider } from '../../contexts/announcement'

export default function Settings() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (id) => {
        setToggleState(id)
    }

    return (
        <div className={styles.PageContainer}>
            <div className={styles.FullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Settings</legend>
                    <div className={Tabstyles.TabsBlock}>
                        <button
                            className={
                                toggleState === 1
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(1)
                            }}
                        >
                            locations
                        </button>
                        <button
                            className={
                                toggleState === 2
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(2)
                            }}
                        >
                            categories
                        </button>
                        <button
                            className={
                                toggleState === 3
                                    ? `${Tabstyles.Tabs} ${Tabstyles.ActiveTabs}`
                                    : Tabstyles.Tabs
                            }
                            onClick={() => {
                                toggleTab(3)
                            }}
                        >
                            services
                        </button>
                    </div>
                    {toggleState === 1 && <Location />}
                    {toggleState === 2 && <Category />}
                    {toggleState === 3 && <Service />}
                </fieldset>
            </div>
        </div>
    )
}

Settings.getLayout = function getLayout(page) {
    return (
        <AnnouncementProvider>
            <Layout>{page}</Layout>
        </AnnouncementProvider>
    )
}
