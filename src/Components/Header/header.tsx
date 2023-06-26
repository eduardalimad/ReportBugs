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
        <h3>bugas.</h3>
        </div>
    <nav className={style.containerNav}>
        <ButtonNav propsTitle="Sobre"/>
        <ButtonNav propsTitle="Meu Histórico"/>
    </nav>
    </div>
    
    
  )
}
