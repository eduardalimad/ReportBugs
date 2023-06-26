import style from "./styleButton.module.scss"

interface props{
    propsTitle: String;
}

export default function buttonHeader({propsTitle}:props) {
  return (
    <button className={style.containerButton}> 
        {propsTitle}
    </button>
    
    
  )
}
