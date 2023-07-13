import style from './page.module.scss'
import { BiImageAdd } from "react-icons/bi";
import InputText from "../Components/Inputs/input"
import InputSelect from "@/Components/Inputs/select"
import CardTextArea from "@/Components/Inputs/textArea"
import Header from "@/Components/Header/header"
import Button from "@/Components/Buttons/buttonGreen"

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <section className={style.containerLeft}>
          <div className={style.form}>
            <span className={style.title}> E-mail </span>
            <InputText propsType="email" typeStyle='screen one' />
            <CardTextArea />
            <span className={style.title}> Sistema </span>
            <InputSelect />
          </div>

        </section>
        <section className={style.containerRight}>
          <label htmlFor="file"  className={style.containerIcon} >
            <BiImageAdd className={style.icon} />
          </label>
        
        </section>
        <section className={style.containerButton}>
          <Button propsTitle="ENVIAR" />
        </section>
      </main>

    </div>
  )
}
