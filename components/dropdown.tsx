import styles from '../styles/Home.module.scss'
import { useState } from 'react'

interface DropdownProps {
  label: string,
  options: string[]
}

const Dropdown = ({ label, options }: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [spendingType, setSpendingType] = useState('')
  const handleOpenDropdown = () => {
    setOpenDropdown(open => !open)
  }
  const handleSpendingType = (option: string) => {
    setSpendingType(option)
  }
  return (
    <div className={styles.dropdown} onClick={handleOpenDropdown}>
      <div>{spendingType.length > 0 ? spendingType : label}</div>
      {openDropdown && (
        <>
          {options.map((option) => (
            <div className={`${spendingType === option ? styles.hiddenOption : ''}`} onClick={() => handleSpendingType(option)} key={option}>{option}</div>
          ))}
        </>
      )}
    </div>
  )
}

export default Dropdown