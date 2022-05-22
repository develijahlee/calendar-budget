import { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Popup from './popup'

const Day = ({ columnIndex, rowIndex, firstDayInMonth, calculatedDay, totalDays, checkCurrentDay }: any) => {
  const [openPopup, setOpenPopup] = useState(false)
  const onClick = () => {
    setOpenPopup(true)
  }
  return (
    <>
      <div onClick={onClick} key={columnIndex} className={`${styles.cell} ${checkCurrentDay(calculatedDay) ? styles.currentDay : ''}`}>
        {(rowIndex === 0 && columnIndex < firstDayInMonth) ||
          calculatedDay > totalDays
          ? ""
          : calculatedDay}
      </div>
      {openPopup && (
        <Popup setOpenPopup={setOpenPopup} />
      )}
    </>
  )
}

export default Day