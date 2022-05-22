import { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Home.module.scss'

interface PopupProps {
  setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup = ({ setOpenPopup }: PopupProps) => {

  const onClick = () => {
    setOpenPopup(false)
  }
  return (
    <div onClick={onClick} className={styles.popup}><p>test</p></div>
  )
}

export default Popup