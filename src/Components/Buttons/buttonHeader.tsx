import style from "./styleButton.module.scss"
import Link from 'next/link'

interface props{
    propsTitle: String;
    slug:String;
}

export default function buttonHeader({propsTitle, slug}:props) {
  return (

    <Link className={style.containerButton} href={`/${slug}`}>{propsTitle}</Link>
    
  )
}
