import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import styles from './popup.module.scss'
import Dropdown from './spendingRecord'

interface PopupProps {
  setOpenPopup: Dispatch<SetStateAction<boolean>>
}

const Popup = ({ setOpenPopup }: PopupProps) => {
  const [spendingList, setSpendingList] = useState([])
  const spendingOptions = ['Food', 'Utitlies', 'Leisure']
  const [dailyTotal, setDailyTotal] = useState(0)

  const onClick = () => {
    setOpenPopup(false)
  }

  useEffect(() => {
    console.log('spendingList', spendingList)
  }, [spendingList])

  return (
    <div className={styles.popup}>
      <button className={styles.popupCloseBtn} onClick={onClick}>Close</button>
      <div className={styles.totalWrapper}>
        <p>Daily Total: {dailyTotal}</p>
        <Dropdown label="Spending Type" options={spendingOptions} setSpendingList={setSpendingList} setDailyTotal={setDailyTotal} />
        {spendingList.map((_, i) => (
          <React.Fragment key={i}>
            <Dropdown label="Spending Type" options={spendingOptions} setSpendingList={setSpendingList} setDailyTotal={setDailyTotal} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Popup