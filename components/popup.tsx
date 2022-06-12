import { Dispatch, ChangeEvent, SetStateAction, useState } from 'react'
import styles from '../styles/Home.module.scss'
import Dropdown from './dropdown'

interface PopupProps {
  setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup = ({ setOpenPopup }: PopupProps) => {
  const spendingOptions = ['Food', 'Utitlies', 'Leisure']
  const [value, setValue] = useState("");
  const [dailyTotal, setDailyTotal] = useState(0)

  const onClick = () => {
    setOpenPopup(false)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');
    setValue(result);
  };

  return (
    <div className={styles.popup}>
      <button className={styles.popupCloseBtn} onClick={onClick}>Close</button>
      <div className={styles.totalWrapper}>
        <p>Daily Total: {dailyTotal}</p>
        <div className={styles.inputWrapper}>
          <input value={new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Number(value))} onChange={handleChange} type="text" />
          <Dropdown label="Spending Type" options={spendingOptions} />
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Popup