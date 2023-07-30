import Image from 'next/image'
import style from "./styleHeader.module.scss"
import ButtonNav from "../Buttons/buttonHeader"

export default function Header() {
  return (
    <div className={style.containerHeader}>
        <div className={style.containerLogo}>
            <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Picture of the author"
            
        />
        <a href='/'>bugas.</a>
        </div>
    <nav className={style.containerNav}>
        <ButtonNav propsTitle="Sobre" slug="about"/>
        <ButtonNav propsTitle="Histórico" slug="historico"/>
    </nav>
    </div>
    
    
  )
}
