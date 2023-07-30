import style from "./styleButton.module.scss"
interface props{
    propsTitle: String;
}
export default function buttonSend({propsTitle}:props) {
  return (
    <button className={style.containerButtonGreen}> 
        {propsTitle}
    </button>
    
    
  )
}
