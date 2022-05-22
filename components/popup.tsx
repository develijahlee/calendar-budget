import styles from '../styles/Home.module.scss'

const Popup = ({ setOpenPopup }: any) => {

  const onClick = () => {
    setOpenPopup(false)
  }
  return (
    <div onClick={onClick} className={styles.popup}><p>test</p></div>
  )
}

export default Popup