import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonthName, setCurrentMonthName] = useState('')
  const [currentMonthCount, setCurrentMonthCount] = useState(new Date().getMonth() + 1)
  const [dayOfMonth] = useState(new Date().getDate())
  const [totalDaysOfMonth, setTotalDaysOfMonth] = useState([]) as Array<any>

  const getDaysInMonth = (year: number, month: number) => {
    console.log('year', year, 'month', month)
    return new Date(year, month, 0).getDate();
  }

  const getMonthName = (month: number) => {
    switch (month) {
      case 1:
        return 'January'
      case 2:
        return 'February'
      case 3:
        return 'March'
      case 4:
        return 'April'
      case 5:
        return 'May'
      case 6:
        return 'June'
      case 7:
        return 'July'
      case 8:
        return 'August'
      case 9:
        return 'September'
      case 10:
        return 'October'
      case 11:
        return 'November'
      case 12:
        return 'December'
      default:
        return ''
    }
  }

  const changeCurrentMonth = (param: string) => {
    if (param === 'increase') {
      if (currentMonthCount === 12) {
        setCurrentYear(currentYear => currentYear + 1)
        setCurrentMonthCount(1)
      } else {
        setCurrentMonthCount(currentMonthCount => currentMonthCount + 1)
      }
    } else if (param === 'decrease') {
      if (currentMonthCount === 1) {
        setCurrentYear(currentYear => currentYear - 1)
        setCurrentMonthCount(12)
      } else {
        setCurrentMonthCount(currentMonthCount => currentMonthCount - 1)
      }
    }
  }

  useEffect(() => {
    const currentMonthName = getMonthName(currentMonthCount)
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonthCount);
    setCurrentYear(currentYear)
    setCurrentMonthName(currentMonthName)
    setTotalDaysOfMonth([...Array(daysInCurrentMonth).keys()])
  }, [currentMonthCount, currentYear])

  return (
    <div className={styles.container}>
      <Head>
        <title>Calendar Budget App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>currentYear: {currentYear}, currentMonthName: {currentMonthName}, dayOfMonth: {dayOfMonth}</p>
      <p>currentMonthCount: {currentMonthCount}</p>
      <button onClick={() => changeCurrentMonth('increase')}>increase currentMonth</button>
      <button onClick={() => changeCurrentMonth('decrease')}>decrease currentMonth</button>
      <div className={styles.calendarWrap}>
        {totalDaysOfMonth.map((day: number) => (
          <div key={day + 1}>{day + 1}</div>
        ))}
      </div>
    </div>
  )
}

export default Home
