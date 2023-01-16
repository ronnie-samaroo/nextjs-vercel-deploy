import styles from '../../styles/Layout.module.css'
import Image from 'next/image'
import profilePic from '../../public/header_logo.svg'


const HeaderMin = () => {

    return (
        <>
        <div className={styles.HeaderSection}>
            <div className={styles.Container}>
                <div className={styles.HeaderGrid}>
                    <div className={styles.HeaderLogo}>
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={120}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
    
export default HeaderMin