import style from "./styleInput.module.scss"

export default function selectComponent() {
  return (
    
    <select className={style.containerSelect}> 
        <option value="someOption"></option>
        <option value="someOption">FTI</option>
        <option value="otherOption">Startup</option>
        <option value="someOption">TutiAcademy</option>
        <option value="otherOption">Rela. Tryout</option>
    </select>

    
  )
}
