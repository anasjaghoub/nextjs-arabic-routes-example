import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Weather() {
    const router = useRouter()
    
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {router.locale === 'ar' ? 'حالة الطقس' : 'Welcome to Weather page!'}
                    
                </h1>
            </main>
        </div>
    )
}