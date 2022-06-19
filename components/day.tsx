import { useState } from 'react'
import styles from './day.module.scss'
import Popup from './popup'

interface DayProps {
  columnIndex: number
  rowIndex: number
  firstDayInMonth: number
  calculatedDay: number
  totalDays: number
  checkCurrentDay: (date: number) => boolean
}

const Day = ({ columnIndex, rowIndex, firstDayInMonth, calculatedDay, totalDays, checkCurrentDay }: DayProps) => {
  const [openPopup, setOpenPopup] = useState(false)
  const onClick = () => {
    setOpenPopup(true)
  }
  return (
    <>
      <div onClick={onClick} key={columnIndex} className={`${styles.cell} ${checkCurrentDay(calculatedDay) && styles.currentDay} ${((rowIndex === 0 && columnIndex < firstDayInMonth) || (calculatedDay > totalDays)) && styles.unclickableDay}`}>
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