import Image from 'next/image'
import styles from '../styles/About.module.css'
import charizard from '../../public/images/charizard.png'
import avatar from '../../public/images/avatar.jpeg'

const About = () => {
  return (
    <>
    <div className={styles.about}>
        <h1>
            Sobre o projeto
        </h1>
        <p>Olá! Meu nome é Leandro Andrade, sou Desenvolvedor Full Stack Jr., comecei a gostar de estudar programação por Java, mas atualmente estou aprendendo Next.JS e Nest.JS. Este projeto foi construído para treinar conhecimentos em Next.JS, utilizando uma api simples para recriar uma pokedex, seguindo o curso do <a href="https://www.youtube.com/@MatheusBattisti" target='blank'>Hora de Codar</a> no Youtube.</p>
        <Image className={styles.images} src={avatar} width={200} height={200}/>

        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/techleandro/" target='blank'>Linkedin</a>
          <a href="https://github.com/techleandro" target='blank'>GitHub</a>
        </div>
    </div>
    </>
  )
}

export default About