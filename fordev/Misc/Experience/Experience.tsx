import Link from 'next/link';
import styles from './experience.module.css';
import Arrow from './arrow';

export default function Experience(){
return (
 <div className={styles.experience}>
    <h4 className={styles.h4}>The Business Experience</h4>
    <h2>Stay in Control of Your Home With a Reliable Business You Can Trust</h2>

    <div className={styles.itemsWrapper}>
        <div className={styles.item}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12.88 5.05c3.18.4 5.67 2.89 6.07 6.07c.06.51.49.88.99.88c.04 0 .08 0 .12-.01c.55-.07.94-.57.87-1.12a8.98 8.98 0 0 0-7.81-7.81c-.55-.06-1.05.33-1.11.88c-.07.55.32 1.05.87 1.11m.38 2.11c-.53-.14-1.08.18-1.22.72s.18 1.08.72 1.22a3 3 0 0 1 2.15 2.15a1.003 1.003 0 0 0 1.22.72c.53-.14.85-.69.72-1.22a5.02 5.02 0 0 0-3.59-3.59m5.97 8.1l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"></path></svg>
            </div>
            <h3 className={styles.title}>Contact Us</h3>
            <p className={styles.desc}>Contact us and get an estimate for your project</p>

            <Arrow />
        </div>

         <div className={styles.item}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width={2048} height={2048} viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 256v1792H256V256h512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100zM640 512h768V384h-256V256q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128H640zm1024-128h-128v256H512V384H384v1536h1280zM768 896h768v128H768zm0 384h768v128H768zm0 384h768v128H768zM512 896h128v128H512zm0 384h128v128H512zm0 384h128v128H512z"></path></svg>
            </div>
            <h3 className={styles.title}>Get It Done</h3>
            <p className={styles.desc}>Have your project done by a professional.</p>

            <Arrow />
        </div>

         <div className={styles.item}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024"><path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4z"></path></svg>
            </div>
            <h3 className={styles.title}>Trust The Work</h3>
            <p className={styles.desc}>Your problem is now one less thing to worry about.</p>
        </div>
    </div>
    <div className="center">
        <Link href={"/contact"} className='main-link'>Contact Us</Link>
    </div>
 </div>
)};