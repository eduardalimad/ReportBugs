import style from "./styleInput.module.scss"
import InputText from "./input"

export default function textAreaComponent() {
  return (
    <div className={style.containerTextArea}>
        <span className={style.containerTitle}> Titulo </span>
        <InputText propsType="text" typeStyle='screen two'/>

        <span className={style.containerTitle}> Descrição </span>
        <textarea className={style.textarea} placeholder="Descreva aqui os erros no sistema que foram encontrados..."></textarea>

    </div>
    
    
  )
}