import Header from './header'
import Footer from './footer'
import Sidebar from './Sidebar'
import styles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <div className={styles.MainContent}>
                    <Sidebar />
                    <div>{children}</div>
                </div>
            </div>
            <Footer />
        </>
    )
}
