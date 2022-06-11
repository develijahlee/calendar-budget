import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.scss'

interface PopupProps {
  setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup = ({ setOpenPopup }: PopupProps) => {
  const [dailyTotal, setDailyTotal] = useState(0)

  const onClick = () => {
    setOpenPopup(false)
  }

  return (
    <div className={styles.popup}>
      <button className={styles.popupCloseBtn} onClick={onClick}>Close</button>
      <div className={styles.totalWrapper}>
        <p>Daily Total: {dailyTotal}</p>
        <div>
          <input type="text" />
          <select name="spending">
            <option value="">Spending Type</option>
            <option value="food">Food</option>
            <option value="utilities">Utilities</option>
            <option value="leisure">Leisure</option>
          </select>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Popup