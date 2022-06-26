import styles from './spendingRecord.module.scss'
import { Dispatch, ChangeEvent, SetStateAction, useState } from 'react'

interface SpendingRecordProps {
  label: string,
  options: string[]
  setSpendingList: Dispatch<SetStateAction<any>>
  setDailyTotal: Dispatch<SetStateAction<number>>
}

const SpendingRecord = ({ label, options, setSpendingList, setDailyTotal }: SpendingRecordProps) => {
  const [value, setValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false)
  const [spendingType, setSpendingType] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');
    setValue(result);
  };

  const handleOpenDropdown = () => {
    setOpenDropdown(open => !open)
  }

  const handleSpendingType = (option: string) => {
    setSpendingType(option)
  }

  const handleSubmit = () => {
    setSpendingList((list: any) => [...list, { total: value, option: spendingType }])
    setDailyTotal((total: number) => total + Number(value))
  }

  return (
    <div className={styles.inputWrapper}>
      <input value={new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Number(value))} onChange={handleChange} type="text" />
      <div className={styles.dropdown} onClick={handleOpenDropdown}>
        <div>{spendingType.length > 0 ? spendingType : label}</div>
        {openDropdown && (
          <>
            {options.map((option) => (
              <div className={`${spendingType === option && styles.hiddenOption}`} onClick={() => handleSpendingType(option)} key={option}>{option}</div>
            ))}
          </>
        )}
      </div>
      <button disabled={value.length === 0 || spendingType.length === 0} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SpendingRecord