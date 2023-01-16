import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../../styles/Layout.module.css'


const Sidebar = () => {
  const router = useRouter();
    return (
      <div className={styles.SidebarContainer}>
        <fieldset className={styles.fieldsetBox}>
            <legend>Logged in as</legend>
            User name
        </fieldset>
        <div className={styles.SidebarNav}>
        <Link className={router.pathname == "/dashboard" ? styles.active : ""} href="/dashboard">Dashboard</Link>
        <Link className={router.pathname == "/tickets" ? styles.active : ""} href="/tickets">Support Tickets</Link>
        <Link className={router.pathname == "/performance" ? styles.active : ""} href="/performance">Performance</Link>
        <Link className={router.pathname == "/announcements" ? styles.active : ""} href="/announcements">Announcements</Link>
        <Link className={router.pathname == "/listings" ? styles.active : ""} href="/listings">Listings</Link>
        <Link className={router.pathname == "/accounts" ? styles.active : ""} href="/accounts">Accounts</Link>
        <Link className={router.pathname == "/transactions" ? styles.active : ""} href="/transactions">Transactions</Link>
        <Link className={router.pathname == "/logs" ? styles.active : ""} href="/logs">Logs</Link>
        <Link className={router.pathname == "/settings" ? styles.active : ""} href="/settings">Settings</Link>
        <Link href="/logout">Logout</Link>
        </div>
      </div>
    )
  }
  
  export default Sidebar