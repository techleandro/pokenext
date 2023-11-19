import Image from 'next/image'
import styles from '../styles/About.module.css'
import charizard from '../../public/images/charizard.png'

const About = () => {
  return (
    <>
    <div className={styles.about}>
        <h1>
            Sobre o projeto
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ab molestias animi, quidem enim eaque rerum repudiandae, nobis itaque tempore quos quasi praesentium veniam aspernatur. Atque ducimus facilis sed accusantium!</p>
        <Image src={charizard} width={300} height={300} alt='Charizard'/>
    </div>
    </>
  )
}

export default About