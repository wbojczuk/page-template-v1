import styles from "./header.module.css"
import FeaturedService from "./FeaturedService/FeaturedService"


export default function Header() {
  
  return (
    <header className={`${styles.header}`}>
        <FeaturedService imgSrc="/img/placeholder-vertical.png" />
    </header>
  )
}
