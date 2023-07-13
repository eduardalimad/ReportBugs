import Header from "@/Components/Header/header"
import style from "./pageHistorico.module.scss"
import InputText from "@/Components/Inputs/input"
import Button from "@/Components/Buttons/buttonGreen"
export default function PageHistorico(){
    return (
    <>
    <Header/>
    <main className={style.mainPage}>

    
        <div  className={style.labelContainer}>
        <span className={style.titleInput}> E-mail </span>
            <InputText propsType="email" typeStyle='screen one'/>
            <Button propsTitle="Consultar"/>
        </div>
    
    </main>
    </>

)}