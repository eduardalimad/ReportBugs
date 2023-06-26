import style from "./styleInput.module.scss"

interface props{
    typeStyle : 'screen one' | 'screen two';
    propsType: String;
}

export default function inputComponent({propsType, typeStyle}:props) {
  return (
    <input className={typeStyle == 'screen one' ? style.container : style.containerInputComBorda } type={propsType}> 

    </input>
    
    
  )
}
