import Image from "next/image"
import Link from "next/link"
import pokeball from '/public/images/pokeball.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src={pokeball}
            width='30'
            height='30'
            alt="PokeNext"/>
            <h1>PokeNext</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href='/' legacyBehavior>
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about' legacyBehavior>
                <a>Sobre</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar