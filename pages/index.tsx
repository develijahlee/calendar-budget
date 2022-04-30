// https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d
import { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Home: NextPage = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const calendarBodyRef = useRef<HTMLDivElement>(null)

  const rows = 6
  const cells = 7
  const firstDay = (new Date(currentYear, currentMonth)).getDay()

  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  const daysInMonth = (iMonth: number, iYear: number) => {
    return 32 - new Date(iYear, iMonth, 32).getDate()
  }

  const next = () => {
    setCurrentYear((currentMonth === 11) ? currentYear + 1 : currentYear);
    setCurrentMonth((currentMonth + 1) % 12);
  }

  const previous = () => {
    setCurrentYear((currentMonth === 0) ? currentYear - 1 : currentYear);
    setCurrentMonth((currentMonth === 0) ? 11 : currentMonth - 1);
  }

  const renderCalendar = () => {
    let date = 1;
    return [...Array(rows).keys()].map((row) => {
      return (
        <div key={row} className={styles.row}>
          {[...Array(cells).keys()].map((cell) => {
            if (row === 0 && cell < firstDay) {
              return (
                <div key={cell} className={styles.cell}></div>
              )
            } else if (date > daysInMonth(currentMonth, currentYear)) {
              return
            } else {
              const cellText = String(date)
              let currentDay = ''
              if (date === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                currentDay = String(date)
              }
              date++
              return (
                <div key={cell} className={`${styles.cell} ${currentDay === cellText ? styles.currentDay : ''}`}>{cellText}</div>
              )
            }
          })}
        </div>
      )
    })
  }


  return (
    <>
      <Head>
        <title>Calendar Budget App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.calendarWrap}>
        <h2 className={styles.monthTitle}>{months[currentMonth]} {currentYear}</h2>
        <div className={styles.daysWrap}>
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div ref={calendarBodyRef} className={styles.calendarBody}>
          {renderCalendar()}
        </div>
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}

export default Home
